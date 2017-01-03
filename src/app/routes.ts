import { ModuleWithProviders }  from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent, SignupComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth-guard.service';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: AboutComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'projects', component: ProjectsComponent }
    
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: true });
