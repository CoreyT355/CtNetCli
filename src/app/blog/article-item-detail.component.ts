import { Component, OnInit } from '@angular/core';

import { Article } from './article.model';

@Component({
    selector: 'article-item-detail',
    inputs: ['article'],
    templateUrl: './article-item-detail.component.html'
})
export class ArticleItemDetailComponent implements OnInit {
    article: Article;
    constructor() { }

    ngOnInit() { }
}