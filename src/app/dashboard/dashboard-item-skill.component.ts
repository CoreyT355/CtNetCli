import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Skill } from '../skills/skill.model';
import { SkillsService } from '../skills/skills.service';

@Component({
    selector: '[dashboard-item-skill]',
    templateUrl: './dashboard-item-skill.component.html'
})
export class DashboardItemSkillComponent implements OnInit {
    @Input() public skill: Skill;
    constructor(private router: Router, private skillsService: SkillsService) { }

    ngOnInit(): void { }
}