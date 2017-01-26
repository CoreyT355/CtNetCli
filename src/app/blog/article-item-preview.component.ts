import { Component, OnInit } from '@angular/core';

import { BlogService } from './blog.service';
import { Article } from './article.model';

@Component({
    selector: 'article-item-preview',
    inputs: ['article'],
    templateUrl: './article-item-preview.component.html'
})
export class ArticleItemPreviewComponent implements OnInit {
    article: Article;
    constructor() { }

    ngOnInit() { }
}