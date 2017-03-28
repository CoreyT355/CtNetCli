import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { TdLoadingService, TdDialogService, ITdDataTableColumn } from '@covalent/core';

import { BlogService } from '../blog/blog.service';
import { BlogPost } from '../blog/blog-post.model';

@Component({
    selector: 'blog-dashboard-recent-blog-posts',
    templateUrl: './blog-dashboard-recent.component.html'
})
export class BlogDashboardRecentBlogPostsComponent implements OnInit {
    @Input() blogPosts: Array<BlogPost>;

    columns: ITdDataTableColumn[] = [
        { name: 'published', label: 'Published' },
        { name: 'title',  label: 'Title', sortable:true },
        { name: 'text', label: 'Text' },
        { name: 'imageUrl', label: 'Image URL' },
        { name: 'author', label: 'Author' },
        { name: 'tag', label: 'Tag' },
        { name: 'icon', label: 'Icon' },
        { name: 'isActive', label: 'Active' },
        { name: 'dateCreated', label: 'Date Created' },
        { name: 'dateModified', label: 'Date Modified' }
    ];

    constructor(private router: Router,
        private blogService: BlogService,
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