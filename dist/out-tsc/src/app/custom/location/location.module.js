import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { LocationRoutingModule } from './location-routing.module';
var LocationModule = /** @class */ (function () {
    function LocationModule() {
    }
    LocationModule = tslib_1.__decorate([
        NgModule({
            declarations: [CountryComponent],
            imports: [
                CommonModule,
                LocationRoutingModule
            ]
        })
    ], LocationModule);
    return LocationModule;
}());
export { LocationModule };
//# sourceMappingURL=location.module.js.map