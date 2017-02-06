import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'toastr-ng2';

import { BlogService } from '../blog/blog.service';
import { BlogPost } from '../blog/blog-post.model';

@Component({
    selector: 'blog-item-add',
    templateUrl: './blog-item-add.component.html'
})
export class BlogItemAddComponent implements OnInit {
    blogPostAdd: FormGroup;
    blogPostToEdit: BlogPost;
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

    constructor(private fb: FormBuilder, private blogService: BlogService, private router: Router, private toastr: ToastrService) { }
    ngOnInit(): void {
        this.blogPostAdd = this.fb.group({
            "title": [null, Validators.required],
            "imageUrl": "",
            "text": [null, Validators.required],
            "author": "CoreyT",
            "published": false,
            "dateCreated": Date.now(),
            "dateModified": Date.now()
        });
    }
    submitForm(value: any): void {
        this.blogService.addNewBlogPost(value)
            .subscribe(() => {
                this.toastr.success('Successfully saved blog post.', 'Success');
                this.router.navigateByUrl('dashboard/blog');
            },
            err => this.toastr.error(`Error adding blog post: ${err}`, "Uh oh")
            );
    }
}