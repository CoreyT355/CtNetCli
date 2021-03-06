import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'toastr-ng2';

import { ProjectsService } from '../../projects/projects.service';
import { Project } from '../../projects/project.model';

@Component({
    moduleId: module.id,
    selector: 'project-add',
    templateUrl: './projects-add.component.html'
})
export class ProjectAddComponent implements OnInit {
    projectToAdd: FormGroup;
    projectToEdit: Project;
    public options: Object = {
        placeholderText: 'Edit Your Content Here!',
        height: 300
    }
    constructor(private fb: FormBuilder, private projectsService: ProjectsService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }
    ngOnInit(): void {
        this.route.data.subscribe(data => this.projectToEdit = data['project']);

        if (this.projectToEdit != undefined) {
            this.projectToAdd = this.fb.group({
                "title": [this.projectToEdit.title, Validators.required],
                "imageUrl": [this.projectToEdit.imageUrl, Validators.required],
                "teaser": this.projectToEdit.teaser,
                "featured": this.projectToEdit.featured,
                "published": this.projectToEdit.published,
                "isActive": this.projectToEdit.isActive,
                "content": [this.projectToEdit.content, Validators.required],
                "order": [this.projectToEdit.order, Validators.required],
                "dateCreated": this.projectToEdit.dateCreated,
                "dateModified": Date.now()
            });
        } else {
            this.projectToAdd = this.fb.group({
                "title": [null, Validators.required],
                "imageUrl": [null, Validators.required],
                "teaser": "",
                "featured": false,
                "published": false,
                "isActive": true,
                "content": [null, Validators.required],
                "order": [100, Validators.required],
                "dateCreated": Date.now(),
                "dateModified": Date.now()
            });
        }
    }
    submitForm(value: any): void {
        this.projectsService.addProject(value)
            .subscribe(() => {
                this.toastr.success('Successfully saved project.', 'Success');
                this.router.navigateByUrl('dashboard/projects');
            },
            err => this.toastr.error(`Error adding blog post: ${err}`, 'Uh Oh'));
    }
}