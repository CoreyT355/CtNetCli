import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthGuard } from '../auth/auth-guard.service';
import { BlogService } from '../blog/blog.service';

import { dashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings.component';
import { BlogDashboardComponent } from './blog-dashboard.component';
import { BlogDashboardRecentArticlesComponent } from './blog-dashboard-recent.component';
import { BlogDashboardItemComponent } from './blog-dashboard-item.component';
import { BlogItemAddComponent } from './blog-item-add.component';
import { BlogItemEditComponent } from './blog-item-edit.component';
import { BlogResolver } from '../blog/blog.resolver';
import { DashboardSkillsComponent } from './dashboard-skills.component';
import { DashboardListSkillsComponent } from './dashboard-list-skills.component';
import { DashboardItemSkillComponent } from './dashboard-item-skill.component';
import { SkillsService } from '../skills/skills.service';
import { SkillAddComponent } from './skill-add.component';

import { PipesModule } from '../pipes/pipes.module';

import { QuillEditorModule } from 'ng2-quill-editor';

@NgModule({
  imports: [
    dashboardRouting,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    QuillEditorModule,
    PipesModule
  ],
  providers: [
    AuthGuard,
    BlogService,
    BlogResolver,
    SkillsService
  ],
  declarations: [
    DashboardComponent,
    AccountComponent,
    ProfileComponent,
    SettingsComponent,
    BlogDashboardComponent,
    BlogDashboardRecentArticlesComponent,
    BlogDashboardItemComponent,
    BlogItemAddComponent,
    BlogItemEditComponent,
    DashboardSkillsComponent,
    DashboardListSkillsComponent,
    DashboardItemSkillComponent,
    SkillAddComponent
  ]
})
export class DashModule { }
