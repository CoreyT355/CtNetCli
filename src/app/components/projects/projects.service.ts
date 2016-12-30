import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectsService {
    constructor(private af: AngularFire) { }
    getProjects(): FirebaseListObservable<any> {
        return this.af.database.list('/projects', { 
            query: {
                orderByChild: 'order'
            }
         });
    }
}