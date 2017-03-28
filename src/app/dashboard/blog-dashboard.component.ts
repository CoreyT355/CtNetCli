import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import { BlogService } from '../blog/blog.service';
import { BlogPost } from '../blog/blog-post.model';

@Component({
    selector: 'blog-dashboard',
    templateUrl: './blog-dashboard.component.html'
})
export class BlogDashboardComponent implements OnInit {
    blogPosts: FirebaseListObservable<BlogPost[]>;
    constructor(private blogService: BlogService) { }
    getRecentBlogPosts(): void {
        this.blogPosts = this.blogService.getRecentBlogPostss();
    }
    ngOnInit(): void {
        this.getRecentBlogPosts();
    }
}