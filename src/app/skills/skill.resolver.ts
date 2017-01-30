import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Skill } from "./skill.model";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { SkillsService } from "./skills.service";

@Injectable()
export class SkillsResolver implements Resolve<Skill> {
    constructor(private skillService: SkillsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Skill> {
        //console.log('Resolver Param: ' + route.params['id']);
        return this.skillService.getSkill(route.params['id']).first();
    }
}