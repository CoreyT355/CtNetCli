import { Component, OnInit } from '@angular/core';
import { JobRole } from './job-role.model';

@Component({
    selector: 'ctnet-job-role-item',
    inputs: ['jobRole'],
    templateUrl: './job-role-item.component.html'
})
export class JobRoleItemComponent implements OnInit {
    jobRole: JobRole;
    constructor() { }

    ngOnInit() { }
}