import { Injectable, Inject } from '@angular/core';
import { Http } from "@angular/http";
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase, FirebaseRef } from 'angularfire2';

import { Article } from './article.model';

@Injectable()
export class BlogService {
    firebaseDb: any;
    articles: FirebaseListObservable<Article[]>;
    article: Observable<Article>;
    userName: string;
    constructor(private db: AngularFireDatabase, private af: AngularFire, private http: Http, @Inject(FirebaseRef) fb) {
        this.af.auth.subscribe(auth => this.userName = auth.auth.displayName);
        this.firebaseDb = fb.database().ref();
        this.articles = af.database.list("/articles");
    }
    getAllArticles(): Observable<Article[]>{
        return this.af.database.list('/articles', {
            query: {
                orderByKey: true,
                limitToFirst: 5,
            }
        }).map(_articles => _articles.filter(article => article.published == true));
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
        let subject = new Subject();
        setTimeout(function () {
            subject.next(foundArticle);
            subject.complete();
        }, 5);
        return foundArticle;
    }
    getArticleById(key: string): Observable<Article> {
        return this.db.list('articles', {
            query: {
                equalTo: key
            }
        })
        .filter(results => results && results.length > 0)
        .map(results => Article.fromJson(results[0]))
        .do(console.log);
    }
    addNewArticle(article: Article): string {
        return this.articles.push(article).key;
    }
    saveArticle(articleKey: string, article): Observable<any> {
        const articleToSave = Object.assign({}, article);
        delete (articleToSave.$key);
        let dataToSave = {};
        dataToSave[`articles/${articleKey}`] = articleToSave;
        return this.firebaseUpdate(dataToSave);
    }
    firebaseUpdate(dataToSave) {
        const subject = new Subject();
        this.firebaseDb.update(dataToSave)
            .then(
                val => {
                    subject.next(val);
                    subject.complete();
                },
                err => {
                    subject.error(err);
                    subject.complete();
                });
        return subject.asObservable();
    }
    deleteArticle(key: string): void {
        console.log("Deleting key, " + key);
        this.articles.remove(key).then(_ => console.log("Deleted!"));
    }
}