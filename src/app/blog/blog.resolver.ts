import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { Observable } from "rxjs/Rx";

import { BlogService } from "./blog.service";
import { BlogPost } from "./blog-post.model";

@Injectable()
export class BlogResolver implements Resolve<BlogPost> {
    constructor(private blogService: BlogService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogPost> {
        //console.log('Resolver Param: ' + route.params['id']);
        return this.blogService.getBlogPost(route.params['id']).first();
    }
}