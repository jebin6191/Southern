import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { settings } from '../../../settings';
var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this._url = settings.baseUrl;
    }
    RoleService.prototype.getRoles = function () {
        return this.http.get(this._url + 'Role/AllRoles');
    };
    RoleService.prototype.saveNewRole = function (element) {
        // const headers = new Headers();
        // headers.append('Token', this._headerStorage.getToken());
        return this.http.post(this._url + 'Role/Create', element);
    };
    RoleService.prototype.modifyRoleDetail = function (element) {
        debugger;
        // const headers = new Headers();
        // headers.append('Token', this._headerStorage.getToken());
        return this.http.put(this._url + 'Role/Modify', element);
    };
    RoleService.prototype.deleteRoleDetail = function (id) {
        debugger;
        // const headers = new Headers();
        // headers.append('Token', this._headerStorage.getToken());
        // const dataUrl = API_URL + 'Role/Delete/' + id;
        return this.http.delete(this._url + 'Role/Delete/' + id);
    };
    RoleService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RoleService);
    return RoleService;
}());
export { RoleService };
//# sourceMappingURL=role.service.js.map