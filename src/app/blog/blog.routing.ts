import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { AuthGuard } from '../auth/auth-guard.service';

const appRoutes: Routes = [
  { path: 'blog',
    component: BlogComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: BlogComponent }
    //   { path: 'profile', component: ProfileComponent },
    //   { path: 'settings', component: SettingsComponent }
    ]
  },
];

export const blogRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
