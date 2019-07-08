import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Location'
        },
        children: [
            {
                path: '',
                redirectTo: 'country'
            },
            {
                path: 'country',
                component: CountryComponent,
                data: {
                    title: 'Country'
                }
            }
        ]
    }
];
var LocationRoutingModule = /** @class */ (function () {
    function LocationRoutingModule() {
    }
    LocationRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], LocationRoutingModule);
    return LocationRoutingModule;
}());
export { LocationRoutingModule };
//# sourceMappingURL=location-routing.module.js.map