import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
var LocationService = /** @class */ (function () {
    function LocationService(http) {
        this.http = http;
    }
    LocationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LocationService);
    return LocationService;
}());
export { LocationService };
//# sourceMappingURL=location.service.js.map