"use strict";
var router_1 = require("@angular/router");
var auth_component_1 = require("./auth.component");
var appRoutes = [
    { path: 'login', component: auth_component_1.LoginComponent },
    { path: 'signup', component: auth_component_1.SignupComponent },
    { path: 'password-reset', component: auth_component_1.ResetpassComponent }
];
exports.authRouting = router_1.RouterModule.forChild(appRoutes);
//# sourceMappingURL=auth.routing.js.map