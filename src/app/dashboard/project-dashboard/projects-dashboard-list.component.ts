import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { TdLoadingService } from '@covalent/core';
import { TdDialogService } from '@covalent/core';

import { ProjectsService } from '../../projects/projects.service';
import { Project } from '../../projects/project.model';

@Component({
    selector: 'project-dashboard-list',
    templateUrl: './projects-dashboard-list.component.html'
})
export class ProjectsDashboardListComponent implements OnInit {
    @Input() projects: Array<Project>;
    constructor(private router: Router,
        private projectsService: ProjectsService,
        private dialogService: TdDialogService,
        private loadingService: TdLoadingService) { }
    gotoViewProject(key: string): void {
        this.router.navigate(["/projects/", key]);
    }
    gotoEditProject(key: string): void {
        this.router.navigate(["/dashboard/projects/edit/", key]);
    }
    deleteProject(key: string): void {
        this.projectsService.deleteProject(key);
    }
    openConfirm(id: string): void {
        this.dialogService.openConfirm({
            message: 'Are you sure you want to delete this project?',
            title: 'Confirm',
            cancelButton: 'No, Cancel',
            acceptButton: 'Yes, Delete',
        }).afterClosed().subscribe((accept: boolean) => {
            if (accept) {
                this.deleteProject(id);
            } else {
                // DO SOMETHING ELSE
            }
        });
    }
    ngOnInit() { }
}