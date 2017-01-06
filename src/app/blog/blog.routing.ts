import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { AuthGuard } from '../auth/auth-guard.service';

const appRoutes: Routes = [
  { path: 'dashboard',
    component: BlogComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: BlogComponent },
    //   { path: 'account', component: AccountComponent },
    //   { path: 'profile', component: ProfileComponent },
    //   { path: 'settings', component: SettingsComponent }
    ]
  },
];

export const blogRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
