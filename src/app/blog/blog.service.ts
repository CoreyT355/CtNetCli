import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2';

import { Article } from './article.model';

@Injectable()
export class BlogService {
    firebaseDb: any;
    articles: FirebaseListObservable<Article[]>;
    article: Observable<Article>;
    constructor(private db:AngularFireDatabase, private af: AngularFire, private http: Http) {
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
    getArticle(key: string): Observable<Article> {
        console.log("Fetching article with key: " + key);
        let foundArticle = this.db.object('/articles/' + key).map(result => Article.fromJson(result)).do(console.log);
        return foundArticle;
    }
    // getArticle(key: string): Observable<Article> {
    //     return this.http.get("https://ctnet-ed473.firebaseio.com/articles/" + key + ".json")
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }
    addNewArticle(article: Article): string {
        return this.articles.push(article).key;
    }
    deleteArticle(key: string): void {
        console.log("Deleting key, " + key);
        this.articles.remove(key).then(_ => console.log("Deleted!"));
    }
}