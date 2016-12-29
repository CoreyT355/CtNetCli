import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Project } from './project.model';

@Injectable()
export class ProjectsService {
    private projectsUrl = './app/components/projects/projects.json';
    constructor(private http: Http) {
        //http.get("components/projects/projects.json").map((res: Response) => res.json()).subscribe(res => this.projects = res, error => this.error = error);
    }
    getProjects(): Promise<Project[]>{
        return this.http
            .get(this.projectsUrl)
            .toPromise()
            .then(response => response.json() as Project[])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}