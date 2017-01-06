import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AngularFireModule, FIREBASE_PROVIDERS, AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

import { AppRouting } from "./routes";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './shared/nav/nav.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list.component';
import { ProjectItemComponent } from './projects/project-item.component';
import { ProjectsService } from './projects/projects.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { JobsListComponent } from './jobs/jobs-list.component';
import { JobItemComponent } from './jobs/job-item.component';
import { JobRolesListComponent } from './jobs/job-roles-list.component';
import { JobRoleItemComponent } from './jobs/job-role-item.component';
import { JobsService } from './jobs/jobs.service';
import { SkillsListComponent } from './skills/skills-list.component';
import { SkillItemComponent } from './skills/skill-item.component'
import { SkillsService } from './skills/skills.service';

import { AuthModule } from './auth/auth.module';
import { DashModule } from './dashboard/dashboard.module';
import { BlogModule } from './blog/blog.module';
import { firebaseConfig } from './firebaseProject';

export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectItemComponent,
    PortfolioComponent,
    JobsListComponent,
    JobItemComponent,
    JobRolesListComponent,
    JobRoleItemComponent,
    SkillsListComponent,
    SkillItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRouting,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AuthModule,
    DashModule,
    BlogModule,
    CommonModule
  ],
  providers: [
    ProjectsService,
    SkillsService,
    JobsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
