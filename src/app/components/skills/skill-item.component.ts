import { Component } from '@angular/core';
import { Skill } from './skill.model';

@Component({
    selector: 'ctnet-skill-item',
    inputs: ['skill'],
    templateUrl: './skill-item.component.html'
})
export class SkillItemComponent {
    skill: Skill;
    constructor() { }
}