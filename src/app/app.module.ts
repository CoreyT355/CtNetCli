import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { routing } from "./routes";
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsListComponent } from './components/projects/projects-list.component';
import { ProjectItemComponent } from './components/projects/project-item.component';
import { ProjectsService } from './components/projects/projects.service';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { JobsListComponent } from './components/jobs/jobs-list.component';
import { JobItemComponent } from './components/jobs/job-item.component';
import { JobRolesListComponent } from './components/jobs/job-roles-list.component';
import { JobRoleItemComponent } from './components/jobs/job-role-item.component';
import { JobsService } from './components/jobs/jobs.service';
import { SkillsListComponent } from './components/skills/skills-list.component';
import { SkillItemComponent } from './components/skills/skill-item.component'
import { SkillsService } from './components/skills/skills.service';

export const firebaseConfig = {
    apiKey: "AIzaSyAaSDoXFea9AITizvjXPMppjHdi3IQWKIc",
    authDomain: "ctnet-ed473.firebaseapp.com",
    databaseURL: "https://ctnet-ed473.firebaseio.com",
    storageBucket: "ctnet-ed473.appspot.com",
    messagingSenderId: "149330434512"
};

@NgModule({
  declarations: [
    AppComponent,
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
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    ProjectsService,
    SkillsService,
    JobsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
