import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleCreationComponent } from './role-creation/role-creation.component';
import { RoleRoutingModule } from './role-routing.module';
import { RoleMenuPrivilegeComponent } from './role-menu-privilege/role-menu-privilege.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var RoleModule = /** @class */ (function () {
    function RoleModule() {
    }
    RoleModule = tslib_1.__decorate([
        NgModule({
            declarations: [RoleCreationComponent,
                RoleMenuPrivilegeComponent],
            imports: [
                CommonModule,
                RoleRoutingModule,
                FormsModule,
                ReactiveFormsModule
            ]
        })
    ], RoleModule);
    return RoleModule;
}());
export { RoleModule };
//# sourceMappingURL=role.module.js.map