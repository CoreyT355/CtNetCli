import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
    selector: 'ctnet-projects-list',
    inputs: ['projects'],
    templateUrl: './projects-list.component.html'
})
export class ProjectsListComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}