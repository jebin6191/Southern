import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../../services/role.service';
import { OrganizationService } from '../../../services/organization.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from '../../../models/role-library/role.model';

@Component({
  selector: 'app-role-creation',
  templateUrl: './role-creation.component.html',
  styleUrls: ['./role-creation.component.scss']
})
export class RoleCreationComponent implements OnInit {

  createRole_flg: boolean = false;
  RolesList: Role[] = []  ;
  OrganizationLevelArr : any = [];
  RoleCreationForm: FormGroup;

  constructor(private _roleService: RoleService, private _organizationService : OrganizationService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createRole_flg = false;
    this.RoleCreationForm = this.formBuilder.group({
      OrganizationLevelName: ['', Validators.required],
      RoleName: ['', Validators.required]
  })
    this.GetAllRoles();
    this.OrganizationLevels();
  }

  GetAllRoles(){
    this._roleService.getRoles()
    .subscribe( 
      res => { this.RolesList = res; 
      }, 
      err => console.log(err)
      );
  }

  OnCreateNewRoleBtnClick(){
    this.createRole_flg = true;
  }
   
  OnCreate(){
      const role = new Role();
      role.RoleName = this.RoleCreationForm.value.RoleName;
      role.OrganizationLevelId = this.RoleCreationForm.value.OrganizationLevelName;
      this._roleService.saveNewRole(role).subscribe((res: any) => {
        if (res) {
          alert("Successfully saved");
          this.ngOnInit();
        }
      });
      console.log(role);
    }

    OnEdit(row){
      
      this.RoleCreationForm = row;
      this.createRole_flg = true;

      console.log(this.RoleCreationForm);
    }

    OnEditSave(){
      debugger;
      const role = new Role();
      role.RoleName = this.RoleCreationForm.value.RoleName;
      role.OrganizationLevelId = this.RoleCreationForm.value.OrganizationLevelName;
      role.RoleId = this.RoleCreationForm.value.RoleId;
      this._roleService.modifyRoleDetail(role).subscribe((res: any) => {
        if (res) {
          alert("Successfully Updated")
          this.ngOnInit();
        }
      });
    }
    OnDelete(row){
      debugger;
      this._roleService.deleteRoleDetail(row.RoleId).subscribe((data: any) => {
        if(data){
          this.ngOnInit();
        }
      })
    }

  OnCancelBtnClick(){
    this.createRole_flg = false;
  }

  OrganizationLevels() {
    this._organizationService.getOrganizationLevels().subscribe(
      res => { this.OrganizationLevelArr = res
      });
  }

}
