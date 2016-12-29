import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Job } from './job.model';

@Injectable()
export class JobsService {
    private jobsUrl = './app/components/jobs/jobs.json';
    //private jobsUrl = 'https://ctnet-ed473.firebaseio.com/jobs';
    constructor(private http: Http) {
    }
    getJobs(): Promise<Job[]>{
        return this.http
            .get(this.jobsUrl)
            .toPromise()
            .then(response => response.json() as Job[])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}