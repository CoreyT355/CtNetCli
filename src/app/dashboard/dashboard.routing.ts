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
      { path: 'blog/edit/:id', component:BlogItemEditComponent, resolve: { article: BlogResolver } }
    ]
  },
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
