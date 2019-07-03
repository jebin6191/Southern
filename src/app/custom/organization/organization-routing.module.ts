import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationLevelComponent } from './organization-level/organization-level.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Organization'
    },
    children: [
      {
        path: '',
        redirectTo: 'organization/organization-level'
      },
      {
        path: 'organization-level',
        component: OrganizationLevelComponent,
        data: {
          title: 'Organization Level'
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
export class OrganizationRoutingModule { }
