import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { Article } from './article.model';
import { BlogService } from './blog.service';

@Component({
    selector: 'article-item-detail',
    inputs: ['article'],
    templateUrl: './article-item-detail.component.html'
})
export class ArticleItemDetailComponent implements OnInit {
    article: Observable<Article>;
    constructor(private route: ActivatedRoute, private blogService: BlogService) { }

    ngOnInit() {
        this.article = this.blogService.getArticle(this.route.snapshot.params['id']);
     }
}