import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2'

import { Observable } from 'rxjs';

import { BlogService } from './blog.service';
import { BlogPost } from './blog-post.model';

@Component({
    selector: 'blog-post-list',
    templateUrl: './blog-post-list.component.html'
})
export class BlogPostListComponent implements OnInit {
    blogPosts: Observable<BlogPost[]>;
    constructor(private blogService: BlogService) { }
    ngOnInit(): void {
        this.blogPosts = this.blogService.getAllBlogPosts();
    }
}