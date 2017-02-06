import { Component, OnInit } from '@angular/core';

import { BlogService } from './blog.service';
import { BlogPost } from './blog-post.model';

@Component({
    selector: 'blog-post-preview',
    inputs: ['blogPost'],
    templateUrl: './blog-post-preview.component.html'
})
export class BlogPostPreviewComponent implements OnInit {
    blogPost: BlogPost;
    constructor() { }
    ngOnInit() { }
}