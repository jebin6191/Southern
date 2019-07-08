import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoleCreationComponent } from './role-creation/role-creation.component';
import { RoleMenuPrivilegeComponent } from './role-menu-privilege/role-menu-privilege.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Role'
        },
        children: [
            {
                path: '',
                redirectTo: 'role/create'
            },
            {
                path: 'create',
                component: RoleCreationComponent,
                data: {
                    title: 'Role Creation'
                }
            },
            {
                path: 'menu-privilege',
                component: RoleMenuPrivilegeComponent,
                data: {
                    title: 'Role Menu Privilege'
                }
            }
        ]
    }
];
var RoleRoutingModule = /** @class */ (function () {
    function RoleRoutingModule() {
    }
    RoleRoutingModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule,
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], RoleRoutingModule);
    return RoleRoutingModule;
}());
export { RoleRoutingModule };
//# sourceMappingURL=role-routing.module.js.map