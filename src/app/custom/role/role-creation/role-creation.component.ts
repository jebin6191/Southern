import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../../services/role.service';
import { IRole } from '../../../interfaces/IRole';
import { OrganisationService } from '../../../services/organisation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role-creation',
  templateUrl: './role-creation.component.html',
  styleUrls: ['./role-creation.component.scss']
})
export class RoleCreationComponent implements OnInit {

  createRole_flg: boolean = false;
  RolesList: IRole[] = []  ;
  OrganisationLevelArr : any = [];
  RoleCreationForm: FormGroup;

  constructor(private _roleService: RoleService, private _organisationService : OrganisationService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.RoleCreationForm = this.formBuilder.group({
      OrganisationName: ['', Validators.required],
      RoleName: ['', Validators.required]
  })
    this.GetAllRoles();
    this.OrganisationLevels();
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
    console.log(this.RoleCreationForm);
  }

  OnCancelBtnClick(){
    this.createRole_flg = false;
  }

  OrganisationLevels() {
    this._organisationService.getOrganisationLevels().subscribe(
      res => { this.OrganisationLevelArr = res
      });
  }

}
