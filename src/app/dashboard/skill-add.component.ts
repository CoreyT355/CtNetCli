import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'toastr-ng2';

import { Skill } from '../skills/skill.model';
import { SkillsService } from '../skills/skills.service';

@Component({
    selector: 'skill-add',
    templateUrl: './skill-add.component.html'
})
export class SkillAddComponent implements OnInit {
    skillToAdd: FormGroup;
    constructor(private fb: FormBuilder, private skillService: SkillsService, private toastr: ToastrService) { }
    submitForm(value: any): void {
        let test = this.skillService.addNewSkill(value);
    }
    ngOnInit(): void {
        this.skillToAdd = this.fb.group({
            "title": [null, Validators.required],
            "level": ["", Validators.required],
            "style": ["", Validators.required],
            "percentage": [null, Validators.required],
            "featured": false,
            "order": [1, Validators.required],
            "dateCreated": Date.now(),
            "dateModified": Date.now()
        });
    }
}