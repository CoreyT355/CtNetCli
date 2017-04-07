import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
    selector: 'ctnet-projects',
    templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
    componentName: string = "Projects";
    projects: Observable<Project[]>;
    error: any;
    constructor(private projectsService: ProjectsService ) { }
    getProjects(): void {
        this.projects = this.projectsService.getProjects();
    }
    ngOnInit(): void {
        this.getProjects();
    }
}