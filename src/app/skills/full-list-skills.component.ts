import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Skill } from './skill.model';
import { SkillsService } from './skills.service';

@Component({
    selector: 'full-list-skills',
    templateUrl: './full-list-skills.component.html'
})
export class FullListSkillsComponent implements OnInit {
    componentName: string = "All of the Skills";
    skills: Observable<Skill[]>;
    constructor(private skillsService: SkillsService) {
        this.skills = this.skillsService.getSkills();
     }

    ngOnInit() { }
}