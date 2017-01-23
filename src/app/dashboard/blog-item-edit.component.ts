import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../blog/article.model';
import { BlogService } from '../blog/blog.service';

@Component({
    selector: 'blog-item-edit',
    templateUrl: './blog-item-edit.component.html'
})
export class BlogItemEditComponent implements OnInit {
    article: Article;

    constructor(private route: ActivatedRoute, private blogService: BlogService) {
        console.log("Param: " + route.params['id']);
        route.data
            .do(console.log)
            .subscribe(data => this.article = data['article']);
    }

    ngOnInit() { }
}