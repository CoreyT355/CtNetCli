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

import { TruncatePipe } from '../pipes/truncate.pipe';


@NgModule({
  imports: [
    dashboardRouting,
    FormsModule,
    ReactiveFormsModule,
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
    BlogDashboardItemComponent,
    BlogItemAddComponent,
    TruncatePipe
  ]
})
export class DashModule { }
