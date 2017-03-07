import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SkillsListComponent } from './skills-list.component';
import { Skill } from './skill.model';

describe('SkillsListComponent (external template)', () => {
    let component: SkillsListComponent;
    let fixture: ComponentFixture<SkillsListComponent>;
    let debugElement: DebugElement;
    let element: HTMLElement;

    let testSkills = new Array<Skill>();

    testSkills.push(new Skill("test1", "test skill 1", "expert", "bg-success", 100, false, 1, "1486332113216", "1486332113216"));

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [SkillsListComponent], // declare the test component
        }).compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(SkillsListComponent);
        component = fixture.componentInstance; // SkillsListComponent test componentInstance
        fixture.componentInstance.skills = testSkills;
        // query for the title by CSS selector
        debugElement = fixture.debugElement.query(By.css('ul'));
        element = debugElement.nativeElement;
    });
    it('it should create the list', async(() => {
        expect(component).toBeTruthy();
    }));
    it('should render a list of skills', async(() => {
        expect(component.skills).toBeTruthy();
    }))
});