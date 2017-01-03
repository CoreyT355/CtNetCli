import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'ctnet-projects',
    templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
    name: string = "Projects";
    projects: FirebaseListObservable<any>;
    error: any;
    constructor(private projectsService: ProjectsService ) { }
    getProjects(): void {
        this.projects = this.projectsService.getProjects();
    }
    ngOnInit(): void {
        this.getProjects();
    }
}