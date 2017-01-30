import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Skill } from '../skills/skill.model';
import { SkillsService } from '../skills/skills.service';

@Component({
    selector: 'dashboard-skills',
    templateUrl: './dashboard-skills.component.html'
})
export class DashboardSkillsComponent implements OnInit {
    skills: Observable<Skill[]>;
    constructor(private skillService: SkillsService) { }

    ngOnInit() {
        this.skills = this.skillService.getSkills();
    }
}