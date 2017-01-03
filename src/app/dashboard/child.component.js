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
var angularfire2_1 = require("angularfire2");
var ProfileComponent = (function () {
    function ProfileComponent(af) {
        this.af = af;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.auth.subscribe(function (auth) {
            console.log(auth);
            _this.userData = auth;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: 'app/dashboard/profile.component.html'
    }),
    __metadata("design:paramtypes", [angularfire2_1.AngularFire])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var AccountComponent = (function () {
    function AccountComponent(firebaseApp) {
        this.auth = firebaseApp.auth();
        console.log(this.auth);
    }
    AccountComponent.prototype.changeUser = function (userData) {
        if (userData.valid) {
            console.log(userData.value);
            this.auth.currentUser.updateProfile(userData.value)
                .then(function (success) {
                console.log('Success', success);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    AccountComponent.prototype.changeEmail = function (emailData) {
        if (emailData.valid) {
            console.log(emailData.value);
            this.auth.currentUser.updateEmail(emailData.value.email)
                .then(function (_) {
                console.log('Success');
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    AccountComponent.prototype.changePassword = function (passwordData) {
        if (passwordData.valid) {
            console.log(passwordData.value);
        }
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: 'app/dashboard/account.component.html'
    }),
    __param(0, core_1.Inject(angularfire2_1.FirebaseApp)),
    __metadata("design:paramtypes", [Object])
], AccountComponent);
exports.AccountComponent = AccountComponent;
var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: 'app/dashboard/settings.component.html'
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=child.component.js.map