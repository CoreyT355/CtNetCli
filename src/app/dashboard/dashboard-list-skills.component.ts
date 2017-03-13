import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Skill } from '../skills/skill.model';
import { SkillsService } from '../skills/skills.service';

@Component({
    selector: 'dashboard-list-skills',
    templateUrl: './dashboard-list-skills.component.html'
})
export class DashboardListSkillsComponent implements OnInit {
    @Input() public skills: Observable<Skill[]>;
    constructor(private router: Router, private skillsService: SkillsService) { }
    gotoEditSkill(key: string): void {
        this.router.navigate(["/dashboard/skills/edit/", key]);
    }
    deleteSkill(key: string): void {
        this.skillsService.deleteSkill(key);
    }
    ngOnInit() { }
}