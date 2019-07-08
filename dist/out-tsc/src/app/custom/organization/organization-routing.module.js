import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrganizationLevelComponent } from './organization-level/organization-level.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Organization'
        },
        children: [
            {
                path: '',
                redirectTo: 'organization/organization-level'
            },
            {
                path: 'organization-level',
                component: OrganizationLevelComponent,
                data: {
                    title: 'Organization Level'
                }
            }
        ]
    }
];
var OrganizationRoutingModule = /** @class */ (function () {
    function OrganizationRoutingModule() {
    }
    OrganizationRoutingModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule,
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], OrganizationRoutingModule);
    return OrganizationRoutingModule;
}());
export { OrganizationRoutingModule };
//# sourceMappingURL=organization-routing.module.js.map