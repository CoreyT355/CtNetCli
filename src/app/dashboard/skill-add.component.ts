import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Skill } from '../skills/skill.model';
import { SkillsService } from '../skills/skills.service';

@Component({
    selector: 'skill-add',
    templateUrl: './skill-add.component.html'
})
export class SkillAddComponent implements OnInit {
    skillToAdd: FormGroup;
    constructor(private fb: FormBuilder, private skillService: SkillsService) { }
    submitForm(value: any): void {
        this.skillService.addNewSkill(value);
    }
    ngOnInit(): void {
        this.skillToAdd = this.fb.group({
            "title": [null, Validators.required],
            "level": [null],
            "style": [null],
            "percentage": [null, Validators.required],
            "featured": false,
            "dateCreated": Date.now(),
            "dateModified": Date.now()
        });
    }
}