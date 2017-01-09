import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

import { TruncatePipe } from '../pipes/truncate.pipe';


@NgModule({
  imports: [
    dashboardRouting,
    FormsModule,
    CommonModule
  ],
  providers: [
    AuthGuard,
    BlogService
  ],
  declarations: [
    DashboardComponent,
    AccountComponent,
    ProfileComponent,
    SettingsComponent,
    BlogDashboardComponent,
    BlogDashboardRecentArticlesComponent,
    TruncatePipe
  ]
})
export class DashModule { }
