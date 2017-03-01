import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { SkillsListComponent } from './skills-list.component';

describe('SkillsListComponent (external template)', () => {
    let component: SkillsListComponent;
    let fixture: ComponentFixture<SkillsListComponent>;
    let debugElement: DebugElement;
    let element: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SkillsListComponent], // declare the test component
        });
        fixture = TestBed.createComponent(SkillsListComponent);
        component = fixture.componentInstance; // SkillsListComponent test componentInstance
        // query for the title by CSS selector
        debugElement = fixture.debugElement.query(By.css('h1'));
        element = debugElement.nativeElement;
    });
});