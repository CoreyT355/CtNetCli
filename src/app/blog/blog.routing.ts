import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';

import { AuthGuard } from '../auth/auth-guard.service';

const appRoutes: Routes = [
  { path: 'blog',
    component: BlogComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: '', component: BlogComponent },
      { path: ':id', component: BlogComponent }
    ]
  },
];

export const blogRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
