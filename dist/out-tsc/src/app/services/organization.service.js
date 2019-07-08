import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { settings } from '../../../settings';
var OrganizationService = /** @class */ (function () {
    function OrganizationService(http) {
        this.http = http;
        this._url = settings.baseUrl;
    }
    OrganizationService.prototype.getOrganizationLevels = function () {
        return this.http.get(this._url + 'OrganizationLevel/AllOrganizationLevel');
    };
    OrganizationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], OrganizationService);
    return OrganizationService;
}());
export { OrganizationService };
//# sourceMappingURL=organization.service.js.map