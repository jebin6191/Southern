import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OrganizationService } from '../../../services/organization.service';
var OrganizationLevelComponent = /** @class */ (function () {
    function OrganizationLevelComponent(_organizationService) {
        this._organizationService = _organizationService;
        this.OrganizationLevelArr = [];
    }
    OrganizationLevelComponent.prototype.ngOnInit = function () {
    };
    OrganizationLevelComponent.prototype.OrganizationLevels = function () {
        var _this = this;
        this._organizationService.getOrganizationLevels().subscribe(function (res) {
            _this.OrganizationLevelArr = res;
        });
    };
    OrganizationLevelComponent = tslib_1.__decorate([
        Component({
            selector: 'app-organization-level',
            templateUrl: './organization-level.component.html',
            styleUrls: ['./organization-level.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [OrganizationService])
    ], OrganizationLevelComponent);
    return OrganizationLevelComponent;
}());
export { OrganizationLevelComponent };
//# sourceMappingURL=organization-level.component.js.map