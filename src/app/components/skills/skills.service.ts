import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Skill } from './skill.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class SkillsService {
    // private skillsUrl = './app/components/skills/skills.json';
    // constructor(private http: Http) {
    // }
    // getSkills(): Promise<Skill[]>{
    //     return this.http
    //         .get(this.skillsUrl)
    //         .toPromise()
    //         .then(response => response.json() as Skill[])
    //         .catch(this.handleError);
    // }
    // private handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error);
    //     return Promise.reject(error.message || error);
    // }
    constructor(private af: AngularFire) {
        //return af.database.list('https://ctnet-ed473.firebaseio.com/jobs');
    }
    getSkills(): FirebaseListObservable<any>{
        return this.af.database.list('https://ctnet-ed473.firebaseio.com/skills');
    }
}