import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Skill } from '../skills/skill.model';
import { SkillsService } from '../skills/skills.service';

@Component({
    selector: 'skill-edit',
    templateUrl: './skill-edit.component.html'
})
export class SkillEditComponent implements OnInit {
    skillToEditForm: FormGroup;
    skillToEdit: Skill;
    constructor(private route: ActivatedRoute, private fb: FormBuilder, private skillService: SkillsService) { }

    ngOnInit(): void {
        this.route.data
            .subscribe(data => this.skillToEdit = data['skill']);
        this.skillToEditForm = this.fb.group({
            "title": [this.skillToEdit.title, Validators.required],
            "level": this.skillToEdit.level,
            "style": [this.skillToEdit.style, Validators.required],
            "percentage": this.skillToEdit.percentage,
            "featured": this.skillToEdit.featured,
            "order": this.skillToEdit.order,
            "dateCreated": this.skillToEdit.dateCreated,
            "dateModified": Date.now()
        });
    }
    save(skill) {
        this.skillService
            .saveSkill(this.skillToEdit.$key, skill)
            .subscribe(() => {
                alert("skill saved succesfully.");
            },
            err => alert(`error saving skill ${err}`)
            );
    }
}