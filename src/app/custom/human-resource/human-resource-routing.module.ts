import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Human-Resource'
    },
    children: [
      {
        path: '',
        redirectTo: 'hr/employee'
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        data: {
          title: 'Employee Creation'
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
export class HumanResourceRoutingModule { }
