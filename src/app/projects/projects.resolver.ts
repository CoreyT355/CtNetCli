import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Rx";

import { Project } from "./project.model";
import { ProjectsService } from "./projects.service";

@Injectable()
export class ProjectsResolver implements Resolve<Project> {
    constructor(private projectsService: ProjectsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
        return this.projectsService.getProject(route.params['id']).first();
    }
}