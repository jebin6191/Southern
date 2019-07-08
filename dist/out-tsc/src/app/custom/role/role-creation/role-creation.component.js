import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RoleService } from '../../../services/role.service';
import { OrganizationService } from '../../../services/organization.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Role } from '../../../models/role-library/role.model';
var RoleCreationComponent = /** @class */ (function () {
    function RoleCreationComponent(_roleService, _organizationService, formBuilder) {
        this._roleService = _roleService;
        this._organizationService = _organizationService;
        this.formBuilder = formBuilder;
        this.IsCreate = false;
        this.IsEdit = false;
        this.RolesList = [];
        this.OrganizationLevelArr = [];
    }
    RoleCreationComponent.prototype.ngOnInit = function () {
        this.IsCreate = false;
        this.RoleCreationForm = this.formBuilder.group({
            OrganizationLevelName: ['', Validators.required],
            RoleName: ['', Validators.required]
        });
        this.GetAllRoles();
        this.OrganizationLevels();
    };
    RoleCreationComponent.prototype.GetAllRoles = function () {
        var _this = this;
        this._roleService.getRoles()
            .subscribe(function (res) {
            _this.RolesList = res;
        }, function (err) { return console.log(err); });
    };
    RoleCreationComponent.prototype.OnCreateNewRoleBtnClick = function () {
        this.IsCreate = true;
    };
    RoleCreationComponent.prototype.OnCreate = function () {
        var _this = this;
        var role = new Role();
        role.RoleName = this.RoleCreationForm.value.RoleName;
        role.OrganizationLevelId = this.RoleCreationForm.value.OrganizationLevelName;
        this._roleService.saveNewRole(role).subscribe(function (res) {
            if (res) {
                alert("Successfully saved");
                _this.ngOnInit();
            }
        });
        console.log(role);
    };
    RoleCreationComponent.prototype.OnEdit = function (row) {
        this.IsCreate = true;
        this.RoleCreationForm.setValue({
            RoleName: row.RoleName,
            OrganizationLevelName: row.OrganizationLevelId
        });
        // this.RoleCreationForm.controls.RoleName.setValue(row.RoleName)
        // this.RoleCreationForm.controls.OrganizationLevelName.setValue(row.OrganizationLevelId)
        console.log(this.RoleCreationForm);
    };
    RoleCreationComponent.prototype.OnEditSave = function () {
        var _this = this;
        debugger;
        var role = new Role();
        role.RoleName = this.RoleCreationForm.value.RoleName;
        role.OrganizationLevelId = this.RoleCreationForm.value.OrganizationLevelName;
        role.RoleId = this.RoleCreationForm.value.RoleId;
        this._roleService.modifyRoleDetail(role).subscribe(function (res) {
            if (res) {
                alert("Successfully Updated");
                _this.ngOnInit();
            }
        });
    };
    RoleCreationComponent.prototype.OnDelete = function (row) {
        var _this = this;
        debugger;
        this._roleService.deleteRoleDetail(row.RoleId).subscribe(function (data) {
            if (data) {
                _this.ngOnInit();
            }
        });
    };
    RoleCreationComponent.prototype.OnCancelBtnClick = function () {
        this.IsCreate = false;
    };
    RoleCreationComponent.prototype.OrganizationLevels = function () {
        var _this = this;
        this._organizationService.getOrganizationLevels().subscribe(function (res) {
            _this.OrganizationLevelArr = res;
        });
    };
    RoleCreationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-role-creation',
            templateUrl: './role-creation.component.html',
            styleUrls: ['./role-creation.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [RoleService, OrganizationService,
            FormBuilder])
    ], RoleCreationComponent);
    return RoleCreationComponent;
}());
export { RoleCreationComponent };
//# sourceMappingURL=role-creation.component.js.map