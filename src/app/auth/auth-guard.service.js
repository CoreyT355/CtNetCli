"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/add/operator/map");
require("rxjs/add/operator/first");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angularfire2_1 = require("angularfire2");
var AuthGuard = (function () {
    function AuthGuard(af, router) {
        this.af = af;
        this.router = router;
        // this.af.auth.subscribe((auth) => console.log(auth));
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.af.auth.map(function (auth) {
            if (auth == null) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        }).first();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angularfire2_1.AngularFire, router_1.Router])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard.service.js.map