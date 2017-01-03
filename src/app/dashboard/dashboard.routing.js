"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var child_component_1 = require("./child.component");
var auth_guard_service_1 = require("../auth/auth-guard.service");
var appRoutes = [
    { path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            { path: '', component: child_component_1.AccountComponent },
            { path: 'account', component: child_component_1.AccountComponent },
            { path: 'profile', component: child_component_1.ProfileComponent },
            { path: 'settings', component: child_component_1.SettingsComponent }
        ]
    },
];
exports.dashRouting = router_1.RouterModule.forChild(appRoutes);
//# sourceMappingURL=dashboard.routing.js.map