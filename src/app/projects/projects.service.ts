import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import 'rxjs/add/operator/map';
import { Observable, Subject } from 'rxjs/Rx';

import { Project } from './project.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase, FirebaseRef } from 'angularfire2';

@Injectable()
export class ProjectsService {
    firebaseDb: any;
    projects: FirebaseListObservable<Project[]>;
    constructor(private db: AngularFireDatabase, private af: AngularFire, @Inject(FirebaseRef) fb) {
        this.firebaseDb = fb.database().ref();
        this.projects = af.database.list('projects');
    }
    getProjects(): FirebaseListObservable<any> {
        return this.af.database.list('/projects', {
            query: {
                orderByChild: 'order'
            }
        });
    }
    getFeaturedProjects(): Observable<Project[]> {
        return this.af.database.list('/projects', {
            query: {
                orderByChild: 'order',
                limitToFirst: 5
            }
        }).map(_projects => _projects.filter(project => project.featured == true));
    }
    getProject(key: string): Observable<Project> {
        let foundProject = this.db.object('/projects/' + key).map(result => Project.fromJson(result));
        let subject = new Subject();
        setTimeout(function () {
            subject.next(foundProject);
            subject.complete();
        }, 5);
        return foundProject;
    }
    addProject(project: Project): Observable<any> {
        return this.projects.push(project)
            .then(resolve => {
                console.log('all good');
            }, reject => {
                console.log('error');
            })
            .catch(reject => {
                console.log('catch')
            });
    }
    saveProject(projectKey: string, project): Observable<any> {
        const projectToSave = Object.assign({}, project);
        delete(projectToSave.$key);
        let dataToSave = {};
        dataToSave[`skills/${projectKey}`] = projectToSave;
        return this.firebaseUpdate(dataToSave);
    }
    firebaseUpdate(dataToSave) {
        const subject = new Subject();
        this.firebaseDb.update(dataToSave)
            .then(
            val => {
                subject.next(val);
                subject.complete();
            },
            err => {
                subject.error(err);
                subject.complete();
            });
        return subject.asObservable();
    }
    deleteProject(key: string): void {
        this.projects.remove(key).then(_ => console.log('Deleted'));
    }
}