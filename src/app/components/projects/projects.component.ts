import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';

@Component({
    selector: 'ctnet-projects',
    templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
    name: string = "Projects";
    projects: Array<Project>;
    error: any;
    constructor(private projectsService: ProjectsService ) { }
    getProjects(): void {
        this.projectsService
        .getProjects()
        .then(projects => this.projects = projects)
        .catch(error => this.error = error);
    }
    ngOnInit(): void {
        this.getProjects();
    }
}