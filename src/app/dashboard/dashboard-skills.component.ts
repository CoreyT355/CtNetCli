import { Component, Input, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import { Skill } from '../skills/skill.model';
import { SkillsService } from '../skills/skills.service';

@Component({
    selector: 'dashboard-skills',
    templateUrl: './dashboard-skills.component.html'
})
export class DashboardSkillsComponent implements OnInit {
    title: string = "Skills";
    skills: FirebaseListObservable<Skill[]>;
    constructor(private skillService: SkillsService) { }

    ngOnInit() {
        this.skills = this.skillService.getSkills();
    }
}