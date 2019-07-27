import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from '../../../../models/role-library/role.model';
import { RoleService } from '../../../../services/administrator/role-library/role.service';
import { OrganizationlevelService } from '../../../../services/administrator/organization/organization-level.service';

@Component({
  selector: 'app-role-creation',
  templateUrl: './role-creation.component.html',
  styleUrls: ['./role-creation.component.scss']
})
export class RoleCreationComponent implements OnInit {

  IsCreate: boolean = false;
  IsEdit: boolean = false;
  RolesList: Role[] = []  ;
  OrganizationLevelArr : any = [];
  RoleCreationForm: FormGroup;
  config = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 20
  };

  maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: 'Youre on page'
  }

  constructor(private _roleService: RoleService, private _organizationService : OrganizationlevelService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.IsCreate = false;
    this.IsEdit = false;
    this.RoleCreationForm = this.formBuilder.group({
      RoleId:[''],
      OrganizationLevelName: [null, Validators.required],
      RoleName: ['', Validators.required]
  })
    this.GetAllRoles();
    this.OrganizationLevels();
  }
  onPageChange(event){
    this.config.currentPage = event;
  }

  GetAllRoles(){
  
    this._roleService.listRoleDetails()
    .subscribe( 
      res => { this.RolesList = res;
        this.config.totalItems = this.RolesList.length; 
      }, 
      err => console.log(err)
      );
  }

  OnCreateNewRoleBtnClick(){
    this.IsCreate = true;
  }

  OnCreate(){
      const role = new Role();
      role.RoleName = this.RoleCreationForm.value.RoleName;
      role.OrganizationLevelId = this.RoleCreationForm.value.OrganizationLevelName;
      this._roleService.saveRoleDetail(role).subscribe((res: any) => {
        if (res) {
          alert("Successfully saved");
          this.ngOnInit();
        }
      });
      console.log(role);
    }

    OnEdit(row){     
      this.IsEdit = true;
      this.RoleCreationForm.setValue({
        RoleName : row.RoleName,
        OrganizationLevelName : row.OrganizationLevelId,
        RoleId : row.RoleId
      })
    }

    OnUpdateBtnClick(){
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
    this.IsCreate = false;
    this.IsEdit = false;
  }

  OrganizationLevels() {

    this._organizationService.listOrganizationLevel().subscribe(
      res => { this.OrganizationLevelArr = res

      });
  }

}
