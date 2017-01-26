import { ModuleWithProviders }  from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './auth/signup.component';
import { AuthGuard } from './auth/auth-guard.service';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: BlogComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'blog', component: BlogComponent }
    
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
