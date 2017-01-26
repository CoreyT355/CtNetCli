import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthGuard } from '../auth/auth-guard.service';

import { blogRouting } from './blog.routing';
import { BlogComponent } from './blog.component';
import { BlogService } from './blog.service';
import { ArticleListComponent } from './article-list.component';
import { ArticleItemPreviewComponent } from './article-item-preview.component';
import { ArticleItemDetailComponent } from './article-item-detail.component';

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports: [
        blogRouting,
        FormsModule,
        CommonModule,
        PipesModule
    ],
    exports: [

    ],
    declarations: [
        BlogComponent,
        ArticleListComponent,
        ArticleItemPreviewComponent,
        ArticleItemDetailComponent
    ],
    providers: [
        AuthGuard,
        BlogService
    ],
})
export class BlogModule { }
