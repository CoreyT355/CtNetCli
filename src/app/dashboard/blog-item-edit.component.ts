import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../blog/article.model';
import { BlogService } from '../blog/blog.service';

@Component({
    selector: 'blog-item-edit',
    templateUrl: './blog-item-edit.component.html'
})
export class BlogItemEditComponent implements OnInit {
    blogItemToEdit: FormGroup;
    articleToEdit: Article;
    public editorConfig = {
        theme: 'snow',
        placeholder: "post",
        modules: {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['link', 'image'],
                ['clean']
            ]
        }
    };

    constructor(private route: ActivatedRoute, private blogService: BlogService, private fb: FormBuilder) {
        console.log("Param: " + route.snapshot.params['id']);

    }

    ngOnInit(): void {
        this.route.data
            .do(console.log)
            .subscribe(data => this.articleToEdit = data['article']);

        this.blogItemToEdit = this.fb.group({
            "title": [this.articleToEdit.title, Validators.required],
            "imageUrl": this.articleToEdit.imageUrl,
            "text": [this.articleToEdit.text, Validators.required],
            "author": this.articleToEdit.author,
            "published": this.articleToEdit.published,
            "dateCreated": this.articleToEdit.dateCreated,
            "dateModified": Date.now()
        });
    }

    save(article) {
        this.blogService
            .saveArticle(this.articleToEdit.$key, article)
            .subscribe(() => {
                alert("article saved succesfully.");
            },
            err => alert(`error saving article ${err}`)
            );

    }
}