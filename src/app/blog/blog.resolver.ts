import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Article } from "./article.model";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { BlogService } from "./blog.service";

@Injectable()
export class BlogResolver implements Resolve<any> {
    constructor(private blogService: BlogService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        //console.log('Resolver Param: ' + route.params['id']);
        return this.blogService.getArticle(route.params['id']).map(article => article);
    }
}