import { Component } from '@angular/core';
import { Job } from './job.model';

@Component({
    selector: 'ctnet-jobs-list',
    inputs: ['jobs'],
    templateUrl: './jobs-list.component.html'
})
export class JobsListComponent {
    jobs: Array<Job>;
    constructor() { }
}