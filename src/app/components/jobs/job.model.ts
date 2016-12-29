import { JobRole } from './job-role.model';

export class Job {
    constructor (
        private title:string,
        private company:string,
        private city:string,
        private state:string,
        private startDate:string,
        private endDate:string,
        private jobRoles:Array<JobRole>) {
            
        }
}