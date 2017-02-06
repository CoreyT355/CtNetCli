import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { BlogPost } from './blog-post.model';
import { BlogService } from './blog.service';

@Component({
    selector: 'blog-post-detail',
    inputs: ['blogPost'],
    templateUrl: './blog-post-detail.component.html'
})
export class BlogPostDetailComponent implements OnInit {
    blogPost: Observable<BlogPost>;
    constructor(private route: ActivatedRoute, private blogService: BlogService) { }

    ngOnInit() {
        this.blogPost = this.blogService.getBlogPost(this.route.snapshot.params['id']);
     }
}