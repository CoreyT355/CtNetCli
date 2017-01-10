import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Article } from '../blog/article.model';

@Component({
    selector: 'blog-item-add',
    templateUrl: './blog-item-add.component.html'
})
export class BlogItemAddComponent implements OnInit {
    blogItemAdd: FormGroup;
    
    constructor(fb: FormBuilder) {
        this.blogItemAdd = fb.group({
            "title": "",
            "imageUrl": "",
            "text": "",
            "author": "CoreyT",
            "dateCreated": new Date(),
            "dateModified": new Date()
        });
    }
    submitForm(value: any): void {
        console.log("Reactive Form Data: ");
        console.log(value);
    }
    ngOnInit() { }
}