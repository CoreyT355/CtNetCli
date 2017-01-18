import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { BlogService } from '../blog/blog.service';
import { Article } from '../blog/article.model';

@Component({
    selector: 'blog-item-add',
    templateUrl: './blog-item-add.component.html'
})
export class BlogItemAddComponent implements OnInit {
    blogItemAdd: FormGroup;
    keyToEdit: Observable<string>;
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

    constructor(private fb: FormBuilder, private blogService: BlogService, private router: Router, private route: ActivatedRoute) {

    }
    submitForm(value: any): void {
        this.blogService.addNewArticle(value);
    }
    ngOnInit(): void {
        this.blogItemAdd = this.fb.group({
            "title": [null, Validators.required],
            "imageUrl": "",
            "text": [null, Validators.required],
            "author": "CoreyT",
            "published": false,
            "dateCreated": Date.now(),
            "dateModified": Date.now()
        });
        this.route.params
            .switchMap((params: Params) => {
                //console.log("id: " + params['id']);
                return this.blogService.getArticle(params['id']);
            })
            .subscribe((blogService: any) => {
                // update the form controls
            });
    }
}