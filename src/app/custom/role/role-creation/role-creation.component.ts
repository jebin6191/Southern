import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../../services/role.service';
import { IRole } from '../../../interfaces/IRole';

@Component({
  selector: 'app-role-creation',
  templateUrl: './role-creation.component.html',
  styleUrls: ['./role-creation.component.scss']
})
export class RoleCreationComponent implements OnInit {

  createRole_flg: boolean = false;
  RolesList: IRole[] = []  ;

  constructor(private _roleService: RoleService) { }

  ngOnInit() {
    this._roleService.getRoles()
    .subscribe( 
      res => { this.RolesList = res; 
      }, 
      err => console.log(err)
      );
    // .subscribe(data => this.RolesList = data);
  }

  OnCreateNewRoleBtnClick(){
    this.createRole_flg = true;
    console.log("RoleList ==>> "+JSON.stringify(this.RolesList));
  }

  OnCancelBtnClick(){
    this.createRole_flg = false;
  }

}
