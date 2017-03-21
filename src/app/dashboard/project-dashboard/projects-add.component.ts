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
    public editorConfig = {
        theme: 'snow',
        placeholder: "post",
        modules: {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['link', 'image'],
                ['clean']
            ]
        }
    };
    constructor(private fb: FormBuilder, private projectsService: ProjectsService, private router: Router, private toastr: ToastrService) { }
    ngOnInit(): void {
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
     submitForm(value: any): void {
         this.projectsService.addProject(value)
            .subscribe(() => {
                this.toastr.success('Successfully saved project.', 'Success');
                this.router.navigateByUrl('dashboard/projects');
            },
            err => this.toastr.error(`Error adding blog post: ${err}`, 'Uh Oh'));
     }
}