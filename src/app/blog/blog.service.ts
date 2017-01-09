import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

import { Article } from './article.model';

@Injectable()
export class BlogService {

    constructor(private af: AngularFire) { }
    getRecentArticles(): FirebaseListObservable<any> {
        return this.af.database.list('/articles', {
            query: {
                orderByKey: true,
                limitToFirst: 5
            }
        });
    }
}