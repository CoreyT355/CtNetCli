import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '../blog/blog.service';
import { BlogPost } from '../blog/blog-post.model';

@Component({
    selector: '[blog-dashboard-item]',
    inputs: ['blogPost'],
    templateUrl: './blog-dashboard-item.component.html'
})
export class BlogDashboardItemComponent implements OnInit {
    blogPost: BlogPost;
    constructor(private blogService: BlogService, private router: Router) { }

    gotoViewBlogPost(key: string): void {
        this.router.navigate(["/blog/", key]);
    }
    gotoEditBlogPost(key: string): void {
        this.router.navigate(["/dashboard/blog/edit/", key]);
    }
    deleteBlogPost(key: string): void {
        this.blogService.deleteBlogPost(key);
    }
    ngOnInit() { }
}