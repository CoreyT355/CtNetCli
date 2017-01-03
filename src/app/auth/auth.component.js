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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angularfire2_1 = require("angularfire2");
var SignupComponent = (function () {
    function SignupComponent(af, router) {
        this.af = af;
        this.router = router;
    }
    SignupComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.af.auth.createUser({
                email: formData.value.email,
                password: formData.value.password
            }).then(function (success) {
                console.log(success);
                _this.router.navigate(['/login']);
            }).catch(function (err) {
                console.log(err);
                _this.router.navigate(['/login']);
            });
        }
        else {
            this.error = 'Your form is invalid';
        }
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/auth/signup.component.html'
    }),
    __metadata("design:paramtypes", [angularfire2_1.AngularFire, router_1.Router])
], SignupComponent);
exports.SignupComponent = SignupComponent;
var LoginComponent = (function () {
    function LoginComponent(af, router) {
        this.af = af;
        this.router = router;
    }
    LoginComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.af.auth.login({
                email: formData.value.email,
                password: formData.value.password
            }).then(function (success) {
                console.log(success);
                _this.router.navigate(['/dashboard']);
            }).catch(function (err) {
                console.log(err);
                _this.router.navigate(['/dashboard']);
            });
        }
        else {
            this.error = 'Your form is invalid';
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/auth/login.component.html'
    }),
    __metadata("design:paramtypes", [angularfire2_1.AngularFire, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var ResetpassComponent = (function () {
    function ResetpassComponent(af, firebaseApp) {
        this.af = af;
        this.auth = firebaseApp.auth();
        console.log(this.auth);
    }
    ResetpassComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log('Submission worked');
            this.auth.sendPasswordResetEmail(formData.value.email)
                .then(function (response) {
                console.log('Sent successfully');
                _this.message = 'Check your email for reset link';
            })
                .catch(function (error) {
                _this.message = error;
                console.log(error);
            });
        }
    };
    return ResetpassComponent;
}());
ResetpassComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/auth/resetpassword.component.html'
    }),
    __param(1, core_1.Inject(angularfire2_1.FirebaseApp)),
    __metadata("design:paramtypes", [angularfire2_1.AngularFire, Object])
], ResetpassComponent);
exports.ResetpassComponent = ResetpassComponent;
//# sourceMappingURL=auth.component.js.map