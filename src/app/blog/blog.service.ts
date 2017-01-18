import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Article } from './article.model';

@Injectable()
export class BlogService {
    articles: FirebaseListObservable<any>;

    constructor(private af: AngularFire) {
        this.articles = af.database.list("/articles");
     }
    getRecentArticles(): FirebaseListObservable<any> {
        return this.af.database.list('/articles', {
            query: {
                orderByKey: true,
                limitToFirst: 5
            }
        });
    }
    getArticle(key: string): FirebaseObjectObservable<Article> {
        return this.af.database.object('/articles/:' + key);
    }
    addNewArticle(article: Article): string {
        var newId = this.articles.push(article).key;
        return newId;
    }
    deleteArticle(key: string): void {
        console.log("Deleting key, " + key);
        this.articles.remove(key).then(_ => console.log("Deleted!"));
    }
}