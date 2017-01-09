import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthGuard } from '../auth/auth-guard.service';

import { blogRouting } from './blog.routing';
import { BlogComponent } from './blog.component';
import { BlogService } from './blog.service';

@NgModule({
    imports: [
        blogRouting,
        FormsModule,
        CommonModule
    ],
    exports: [

    ],
    declarations: [
        BlogComponent
    ],
    providers: [
        AuthGuard,
        BlogService
    ],
})
export class BlogModule { }
