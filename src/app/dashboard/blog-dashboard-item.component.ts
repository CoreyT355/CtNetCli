import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog/blog.service';

import { Article } from '../blog/article.model';

@Component({
    selector: '[blog-dashboard-item]',
    inputs: ['article'],
    templateUrl: './blog-dashboard-item.component.html'
})
export class BlogDashboardItemComponent implements OnInit {
    article: Article;
    constructor(private blogService: BlogService) { }

    deleteArticle(key: string): void {
        this.blogService.deleteArticle(key);
    }

    ngOnInit() { }
}