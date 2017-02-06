import { Component, OnInit } from '@angular/core';

import { BlogPost } from '../blog/blog-post.model';

@Component({
    selector: 'blog-dashboard-recent-blog-posts',
    inputs: ['recentBlogPosts'],
    templateUrl: './blog-dashboard-recent.component.html'
})
export class BlogDashboardRecentBlogPostsComponent implements OnInit {
    recentBlogPosts: Array<BlogPost>;
    constructor() { }
    ngOnInit() { }
}