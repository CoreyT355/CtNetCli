import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthGuard } from '../auth/auth-guard.service';

import { dashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings.component';
import { BlogDashboardComponent } from './blog-dashboard.component';

@NgModule({
  imports: [
    dashboardRouting,
    FormsModule,
    CommonModule
  ],
  providers: [
    AuthGuard
  ],
  declarations: [
    DashboardComponent,
    AccountComponent,
    ProfileComponent,
    SettingsComponent,
    BlogDashboardComponent
  ]
})
export class DashModule { }
