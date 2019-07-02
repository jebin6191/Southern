import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleCreationComponent } from './role-creation/role-creation.component';
import { RoleRoutingModule } from './role-routing.module';
import { RoleMenuPrivilegeComponent } from './role-menu-privilege/role-menu-privilege.component';


@NgModule({
  declarations: [RoleCreationComponent, RoleMenuPrivilegeComponent],
  imports: [
    CommonModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
