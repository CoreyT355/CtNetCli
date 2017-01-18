import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Skill } from './skill.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class SkillsService {
    constructor(private af: AngularFire) { }
    getSkills(): FirebaseListObservable<any[]> {
        return this.af.database.list('/skills', {
            query: {
                orderByChild: 'order',
                limitToFirst: 4
            }
        });
    }
}