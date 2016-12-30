import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Job } from './job.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class JobsService {
    constructor(private af: AngularFire) { }
    getJobs(): FirebaseListObservable<any> {
        return this.af.database.list('/jobs', { 
            query: {
                orderByChild: 'order'
            }
         });
    }
}