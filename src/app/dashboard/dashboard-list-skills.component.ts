import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TdLoadingService, TdDialogService, ITdDataTableColumn } from '@covalent/core';

import { Skill } from '../skills/skill.model';
import { SkillsService } from '../skills/skills.service';

@Component({
    selector: 'dashboard-list-skills',
    templateUrl: './dashboard-list-skills.component.html'
})
export class DashboardListSkillsComponent implements OnInit {
    @Input() skills: Skill[];

    columns: ITdDataTableColumn[] = [
        { name: 'title',  label: 'Title', sortable:true },
        { name: 'level', label: 'Level' },
        { name: 'style', label: 'Style' },
        { name: 'percentage', label: 'Percentage' },
        { name: 'featured', label: 'Featured' },
        { name: 'order', label: 'Order' },
        { name: 'isActive', label: 'Active' },
        { name: 'dateCreated', label: 'Date Created' },
        { name: 'dateModified', label: 'Date Modified' }
    ];

    constructor(private router: Router, private skillsService: SkillsService) { }
    gotoEditSkill(key: string): void {
        this.router.navigate(["/dashboard/skills/edit/", key]);
    }
    deleteSkill(key: string): void {
        this.skillsService.deleteSkill(key);
    }
    ngOnInit() { }
}