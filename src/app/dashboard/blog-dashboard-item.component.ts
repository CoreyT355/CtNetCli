import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TdLoadingService } from '@covalent/core';
import { TdDialogService } from '@covalent/core';

import { BlogService } from '../blog/blog.service';
import { BlogPost } from '../blog/blog-post.model';

@Component({
    selector: '[blog-dashboard-item]',
    inputs: ['blogPost'],
    templateUrl: './blog-dashboard-item.component.html'
})
export class BlogDashboardItemComponent implements OnInit {
    blogPost: BlogPost;
    constructor(private blogService: BlogService, 
        private router: Router,
        private dialogService: TdDialogService,
        private loadingService: TdLoadingService) { }

    gotoViewBlogPost(key: string): void {
        this.router.navigate(["/blog/", key]);
    }
    gotoEditBlogPost(key: string): void {
        this.router.navigate(["/dashboard/blog/edit/", key]);
    }
    deleteBlogPost(key: string): void {
        this.blogService.deleteBlogPost(key);
    }
    openConfirm(id: string): void {
        this.dialogService.openConfirm({
            message: 'Are you sure you want to delete this post?',
            title: 'Confirm',
            cancelButton: 'No, Cancel',
            acceptButton: 'Yes, Delete',
        }).afterClosed().subscribe((accept: boolean) => {
            if (accept) {
                this.deleteBlogPost(id);
            } else {
                // DO SOMETHING ELSE
            }
        });
    }
    ngOnInit() { }
}