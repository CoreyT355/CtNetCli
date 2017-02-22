import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AngularFireModule, FIREBASE_PROVIDERS, AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { ToastrModule } from 'toastr-ng2';
import { CovalentCoreModule } from '@covalent/core';

import { AppRouting } from "./routes";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
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
import { FullListSkillsComponent } from './skills/full-list-skills.component';

import { SendGridService } from './shared/email/sendgrid.service';

import { PipesModule } from './pipes/pipes.module';

import { AuthModule } from './auth/auth.module';
import { DashModule } from './dashboard/dashboard.module';
import { BlogModule } from './blog/blog.module';
import { firebaseConfig } from './firebaseProject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
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
    SkillItemComponent,
    FullListSkillsComponent
  ],
  imports: [
    CovalentCoreModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    AppRouting,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AuthModule,
    DashModule,
    BlogModule,
    CommonModule,
    PipesModule,
    ToastrModule.forRoot({ preventDuplicates: true, progressBar: true, autoDismiss: true, maxOpened: 3})
  ],
  providers: [
    ProjectsService,
    SkillsService,
    JobsService,
    SendGridService
  ],
  exports: [
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
