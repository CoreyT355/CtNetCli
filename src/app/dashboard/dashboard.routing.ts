import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings.component';
import { BlogDashboardComponent } from './blog-dashboard.component';
import { BlogItemAddComponent } from './blog-item-add.component';
import { BlogItemEditComponent } from './blog-item-edit.component';
import { BlogResolver } from '../blog/blog.resolver';
import { DashboardSkillsComponent } from './dashboard-skills.component';
import { SkillAddComponent } from './skill-add.component';
import { SkillEditComponent } from './skill-edit.component';
import { SkillsResolver } from '../skills/skill.resolver';
import { ProjectsDashboardComponent } from './project-dashboard/projects-dashboard.component';
import { ProjectsDashboardListComponent } from './project-dashboard/projects-dashboard-list.component';
import { ProjectAddComponent } from './project-dashboard/projects-add.component';

import { AuthGuard } from '../auth/auth-guard.service';

const appRoutes: Routes = [
  { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: AccountComponent },
      { path: 'account', component: AccountComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'blog', component: BlogDashboardComponent },
      { path: 'blog/add', component: BlogItemAddComponent },
      { path: 'blog/edit/:id', component:BlogItemEditComponent, resolve: { blogPost: BlogResolver } },
      { path: 'skills', component:DashboardSkillsComponent },
      { path: 'skills/add', component: SkillAddComponent },
      { path: 'skills/edit/:id', component:SkillEditComponent, resolve: { skill: SkillsResolver } },
      { path: 'projects', component: ProjectsDashboardComponent },
      { path: 'projects/add', component: ProjectAddComponent }
    ]
  },
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
