import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import { Observable, Subject } from 'rxjs/Rx';

import { Skill } from './skill.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase, FirebaseRef } from 'angularfire2';

@Injectable()
export class SkillsService {
    firebaseDb: any;
    skills: FirebaseListObservable<Skill[]>;
    constructor(private db: AngularFireDatabase, private af: AngularFire, @Inject(FirebaseRef) fb) {
        this.firebaseDb = fb.database().ref();
        this.skills = af.database.list('skills');
    }
    getSkills(): FirebaseListObservable<any[]> {
        return this.af.database.list('/skills', {
            query: {
                orderByChild: 'order'
            }
        });
    }
    getFeaturedSkills(): Observable<Skill[]> {
        return this.af.database.list('/skills', {
            query: {
                orderByChild: 'order',
                limitToFirst: 4
            }
        }).map(_skills => _skills.filter(skill => skill.featured == true));
    }
    getSkill(key: string): Observable<Skill> {
        console.log("Fetching skill with key: " + key);
        let foundSkill = this.db.object('/skills/' + key).map(result => Skill.fromJson(result));
        let subject = new Subject();
        setTimeout(function () {
            subject.next(foundSkill);
            subject.complete();
        }, 5);
        return foundSkill;
    }
    addNewSkill(skill: Skill): Observable<any> {
        return this.skills.push(skill)
            .then(resolve => {
                console.log('all good');
            }, reject => {
                console.log('error');
            })
            .catch(reject => {
                console.log('catch');
            });
    }
    saveSkill(skillKey: string, skill): Observable<any> {
        const skillToSave = Object.assign({}, skill);
        delete (skillToSave.$key);
        let dataToSave = {};
        dataToSave[`skills/${skillKey}`] = skillToSave;
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
    deleteSkill(key: string): void {
        //console.log("Deleting key, " + key);
        this.skills.remove(key).then(_ => console.log("Deleted!"));
    }
}