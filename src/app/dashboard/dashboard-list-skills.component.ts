import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Skill } from '../skills/skill.model';
import { SkillsService } from '../skills/skills.service';

@Component({
    selector: 'dashboard-list-skills',
    templateUrl: './dashboard-list-skills.component.html'
})
export class DashboardListSkillsComponent implements OnInit {
    @Input() public skills: Observable<Skill[]>;
    constructor() { }

    ngOnInit() { }
}