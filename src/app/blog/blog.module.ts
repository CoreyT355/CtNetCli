import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CovalentCoreModule } from '@covalent/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';

//import { blogRouting } from './blog.routing';
import { BlogComponent } from './blog.component';
import { BlogService } from './blog.service';
import { BlogPostListComponent } from './blog-post-list.component';
import { BlogPostPreviewComponent } from './blog-post-preview.component';
import { BlogPostDetailComponent } from './blog-post-detail.component';

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        PipesModule,
        CovalentCoreModule.forRoot()
    ],
    exports: [

    ],
    declarations: [
        BlogComponent,
        BlogPostListComponent,
        BlogPostPreviewComponent,
        BlogPostDetailComponent
    ],
    providers: [
        AuthGuard,
        BlogService
    ],
})
export class BlogModule { }
