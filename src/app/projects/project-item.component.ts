import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
    selector: 'ctnet-project-item',
    inputs: ['project'],
    templateUrl: './project-item.component.html'
})
export class ProjectItemComponent implements OnInit {
    project: Project;
    constructor() { }

    ngOnInit() { }
}