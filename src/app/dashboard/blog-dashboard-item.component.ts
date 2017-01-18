import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '../blog/blog.service';
import { Article } from '../blog/article.model';

@Component({
    selector: '[blog-dashboard-item]',
    inputs: ['article'],
    templateUrl: './blog-dashboard-item.component.html'
})
export class BlogDashboardItemComponent implements OnInit {
    article: Article;
    constructor(private blogService: BlogService, private router: Router) { }

    gotoEditArticle(key: string): void {
        this.router.navigate(["/dashboard/blog/edit/", key]);
    }

    deleteArticle(key: string): void {
        this.blogService.deleteArticle(key);
    }

    ngOnInit() { }
}