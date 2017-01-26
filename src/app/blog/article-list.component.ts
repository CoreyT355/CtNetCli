import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2'

import { Observable } from 'rxjs';

import { BlogService } from './blog.service';
import { Article } from './article.model';

@Component({
    selector: 'article-list',
    //inputs: ['articles'],
    templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {
    articles: Observable<Article[]>;
    constructor(private blogService: BlogService) {
    
    }

    ngOnInit(): void {
        this.articles = this.blogService.getAllArticles();
    }
}