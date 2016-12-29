import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: AboutComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'projects', component: ProjectsComponent }
    
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
