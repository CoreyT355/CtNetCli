import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CovalentCoreModule } from '@covalent/core';

import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';

import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

import { AuthGuard } from '../auth/auth-guard.service';
import { BlogService } from '../blog/blog.service';

import { dashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings.component';
import { BlogDashboardComponent } from './blog-dashboard.component';
import { BlogDashboardRecentBlogPostsComponent } from './blog-dashboard-recent.component';
import { BlogDashboardItemComponent } from './blog-dashboard-item.component';
import { BlogItemAddComponent } from './blog-item-add.component';
import { BlogItemEditComponent } from './blog-item-edit.component';
import { BlogResolver } from '../blog/blog.resolver';
import { DashboardSkillsComponent } from './dashboard-skills.component';
import { DashboardListSkillsComponent } from './dashboard-list-skills.component';
import { DashboardItemSkillComponent } from './dashboard-item-skill.component';
import { SkillsService } from '../skills/skills.service';
import { SkillsResolver } from '../skills/skill.resolver';
import { SkillAddComponent } from './skill-add.component';
import { SkillEditComponent } from './skill-edit.component';
import { ProjectsService } from '../projects/projects.service';
import { ProjectsResolver } from '../projects/projects.resolver';
import { ProjectsDashboardComponent } from './project-dashboard/projects-dashboard.component';
import { ProjectsDashboardListComponent } from './project-dashboard/projects-dashboard-list.component';
import { ProjectAddComponent } from './project-dashboard/projects-add.component';

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    dashboardRouting,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    PipesModule,
    CovalentCoreModule,
    CovalentDynamicFormsModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [
    AuthGuard,
    BlogService,
    BlogResolver,
    SkillsService,
    SkillsResolver,
    ProjectsService,
    ProjectsResolver
  ],
  declarations: [
    DashboardComponent,
    AccountComponent,
    ProfileComponent,
    SettingsComponent,
    BlogDashboardComponent,
    BlogDashboardRecentBlogPostsComponent,
    BlogDashboardItemComponent,
    BlogItemAddComponent,
    BlogItemEditComponent,
    DashboardSkillsComponent,
    DashboardListSkillsComponent,
    DashboardItemSkillComponent,
    SkillAddComponent,
    SkillEditComponent,
    ProjectsDashboardComponent,
    ProjectsDashboardListComponent,
    ProjectAddComponent
  ]
})
export class DashModule { }
