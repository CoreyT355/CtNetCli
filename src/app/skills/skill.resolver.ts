import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Rx";

import { Skill } from "./skill.model";
import { SkillsService } from "./skills.service";

@Injectable()
export class SkillsResolver implements Resolve<Skill> {
    constructor(private skillService: SkillsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Skill> {
        //console.log('Resolver Param: ' + route.params['id']);
        return this.skillService.getSkill(route.params['id']).first();
    }
}