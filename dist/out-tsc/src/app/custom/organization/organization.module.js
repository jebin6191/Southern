import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationLevelComponent } from './organization-level/organization-level.component';
import { OrganizationRoutingModule } from './organization-routing.module';
var OrganisationModule = /** @class */ (function () {
    function OrganisationModule() {
    }
    OrganisationModule = tslib_1.__decorate([
        NgModule({
            declarations: [OrganizationLevelComponent],
            imports: [
                CommonModule,
                OrganizationRoutingModule
            ]
        })
    ], OrganisationModule);
    return OrganisationModule;
}());
export { OrganisationModule };
//# sourceMappingURL=organization.module.js.map