import { Component, OnInit } from '@angular/core';
import { JobRole } from './job-role.model';


@Component({
    selector: 'ctnet-job-roles-list',
    inputs: ['jobRoles'],
    templateUrl: './job-roles-list.component.html'
})
export class JobRolesListComponent implements OnInit {
    jobRoles: Array<JobRole>;
    constructor() { }

    ngOnInit() { }
}