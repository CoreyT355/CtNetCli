import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'toastr-ng2';

import { BlogPost } from '../blog/blog-post.model';
import { BlogService } from '../blog/blog.service';

@Component({
    selector: 'blog-item-edit',
    templateUrl: './blog-item-edit.component.html'
})
export class BlogItemEditComponent implements OnInit {
    blogPostForm: FormGroup;
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
    constructor(private route: ActivatedRoute, private router: Router, private blogService: BlogService, private fb: FormBuilder, private toastr: ToastrService) { }
    ngOnInit(): void {
        this.route.data
            .subscribe(data => this.blogPostToEdit = data['blogPost']);
        this.blogPostForm = this.fb.group({
            "title": [this.blogPostToEdit.title, Validators.required],
            "imageUrl": this.blogPostToEdit.imageUrl,
            "text": [this.blogPostToEdit.text, Validators.required],
            "author": this.blogPostToEdit.author,
            "published": this.blogPostToEdit.published,
            "tag": "",
            "icon": "",
            "dateCreated": this.blogPostToEdit.dateCreated,
            "dateModified": Date.now()
        });
    }
    save(blogPost) {
        this.blogService
            .saveBlogPost(this.blogPostToEdit.$key, blogPost)
            .subscribe(() => {
                this.toastr.success('Successfully saved blog post.', 'Success');
                this.router.navigateByUrl('dashboard/blog');
            },
            err => this.toastr.error(`Error adding blog post: ${err}`, "Uh oh")
            );
    }
}