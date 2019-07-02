import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationLevelComponent } from './organisation-level/organisation-level.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Organisation'
    },
    children: [
      {
        path: '',
        redirectTo: 'organisation/organisation-level'
      },
      {
        path: 'organisation-level',
        component: OrganisationLevelComponent,
        data: {
          title: 'Organisation Level'
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
export class OrganisationRoutingModule { }
