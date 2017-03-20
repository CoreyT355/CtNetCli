import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProjectsService } from '../../projects/projects.service';
import { Project } from '../../projects/project.model';

@Component({
    selector: 'projects-dashboard',
    templateUrl: './projects-dashboard.component.html'
})
export class ProjectsDashboardComponent implements OnInit {
    projects: Observable<Project[]>;
    constructor(private projectsService: ProjectsService) { }
    getProjects(): void {
        this.projects = this.projectsService.getFeaturedProjects();
    }
    ngOnInit(): void {
        this.getProjects();
    }
}