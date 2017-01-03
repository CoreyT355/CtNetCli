import { Component } from '@angular/core';
import { Skill } from './skill.model';

@Component({
    selector: 'ctnet-skills-list',
    inputs: ['skills'],
    templateUrl: './skills-list.component.html'
})
export class SkillsListComponent {
    skills: Array<Skill>;
    constructor() { }
}