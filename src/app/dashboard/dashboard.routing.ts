import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings.component';
import { BlogDashboardComponent } from './blog-dashboard.component'; 
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
      { path: 'blog', component: BlogDashboardComponent }
    ]
  },
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
