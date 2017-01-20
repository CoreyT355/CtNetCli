import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Article } from './article.model';

@Injectable()
export class BlogService {
    articles: FirebaseListObservable<Article[]>;

    constructor(private af: AngularFire, private http: Http) {
        this.articles = af.database.list("/articles");
    }
    getRecentArticles(): FirebaseListObservable<Article[]> {
        return this.af.database.list('/articles', {
            query: {
                orderByKey: true,
                limitToFirst: 5
            }
        });
    }
    // getArticle(key: string): FirebaseObjectObservable<Article> {
    //     let article = this.af.database.object('/articles/:' + key);
    //     console.log("Article: " + article);
    //     return article;
    // }
    getArticle(key: string): Observable<Article> {
        return this.http.get("https://ctnet-ed473.firebaseio.com/articles/" + key + ".json")
            .map(this.extractData)
            .catch(this.handleError);
    }
    addNewArticle(article: Article): string {
        return this.articles.push(article).key;
    }
    deleteArticle(key: string): void {
        console.log("Deleting key, " + key);
        this.articles.remove(key).then(_ => console.log("Deleted!"));
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}