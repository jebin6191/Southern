import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoleCreationComponent } from './role-creation/role-creation.component';
import { RoleMenuPrivilegeComponent } from './role-menu-privilege/role-menu-privilege.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Role'
    },
    children: [
      {
        path: '',
        redirectTo: 'role/create'
      },
      {
        path: 'create',
        component: RoleCreationComponent,
        data: {
          title: 'Role Creation'
        }
      },
      {
        path: 'menu-privilege',
        component: RoleMenuPrivilegeComponent,
        data: {
          title: 'Role Menu Privilege'
        }
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RoleRoutingModule { }
