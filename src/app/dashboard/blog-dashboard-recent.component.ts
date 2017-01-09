import { Component, OnInit } from '@angular/core';

import { Article } from '../blog/article.model';

@Component({
    selector: 'blog-dashboard-recent-articles',
    inputs: ['recentArticles'],
    templateUrl: './blog-dashboard-recent.component.html'
})
export class BlogDashboardRecentArticlesComponent implements OnInit {
    recentArticles: Array<Article>;
    constructor() { }

    ngOnInit() { }
}