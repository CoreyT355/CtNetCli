import { Component } from '@angular/core';
import { Job } from './job.model';
import { JobRolesListComponent } from './job-roles-list.component';

@Component({
    selector: 'ctnet-job-item',
    inputs: ['job'],
    templateUrl: './job-item.component.html'
})
export class JobItemComponent {
    job: Job;
    constructor() { }
}