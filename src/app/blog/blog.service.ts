import { Injectable, Inject } from '@angular/core';
import { Http } from "@angular/http";
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase, FirebaseRef } from 'angularfire2';

import { BlogPost } from './blog-post.model';

@Injectable()
export class BlogService {
    firebaseDb: any;
    blogPosts: FirebaseListObservable<BlogPost[]>;
    blogPost: Observable<BlogPost>;
    userName: string;
    constructor(private db: AngularFireDatabase, private af: AngularFire, private http: Http, @Inject(FirebaseRef) fb) {
        //this.af.auth.subscribe(auth => this.userName = auth.auth.displayName);
        this.firebaseDb = fb.database().ref();
        this.blogPosts = af.database.list("/blogposts");
    }
    getAllBlogPosts(): Observable<BlogPost[]> {
        return this.af.database.list('/blogposts', {
            query: { orderByKey: true, limitToFirst: 5 }
        }).map(_blogPost => _blogPost.filter(blogPost => blogPost.published == true));
    }
    getRecentBlogPostss(): FirebaseListObservable<BlogPost[]> {
        return this.af.database.list('/blogposts', {
            query: { orderByKey: true, limitToFirst: 5 }
        });
    }
    getBlogPost(key: string): Observable<BlogPost> {
        console.log("Fetching blog post with key: " + key);
        let foundBlogPost = this.db.object('/blogposts/' + key).map(result => BlogPost.fromJson(result));
        let subject = new Subject();
        setTimeout(function () {
            subject.next(foundBlogPost);
            subject.complete();
        }, 5);
        return foundBlogPost;
    }
    addNewBlogPost(blogPost: BlogPost): Observable<any> {
        return this.blogPosts.push(blogPost)
            .then(resolve => {
                console.log('all good');
            }, reject => {
                console.log('error');
            })
            .catch(reject => {
                console.log('catch');
            });
    }
    saveBlogPost(blogPostKey: string, blogPost): Observable<any> {
        const blogPostToSave = Object.assign({}, blogPost);
        delete (blogPostToSave.$key);
        let dataToSave = {};
        dataToSave[`blogposts/${blogPostKey}`] = blogPostToSave;
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
    deleteBlogPost(key: string): void {
        //console.log("Deleting key, " + key);
        this.blogPosts.remove(key).then(_ => console.log("Deleted!"));
    }
}