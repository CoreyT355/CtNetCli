import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostDetailComponent } from './blog/blog-post-detail.component';
import { BlogResolver } from './blog/blog.resolver';
import { FullListSkillsComponent } from './skills/full-list-skills.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './auth/signup.component';
import { AuthGuard } from './auth/auth-guard.service';

export const routes: Route[] = [{ 
    path: '', component: HomeComponent, children: [
        { path: '', redirectTo: '/blog', pathMatch: 'full' },
        { path: 'contact', component: ContactComponent },
        { path: 'about', component: AboutComponent },
        { path: 'portfolio', component: PortfolioComponent },
        { path: 'projects', component: ProjectsComponent },
        { path: 'blog', component: BlogComponent },
        { path: 'blog/:id', component: BlogPostDetailComponent, resolve: { blogPost: BlogResolver } },
        { path: 'skills', component: FullListSkillsComponent }
    ]},
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
