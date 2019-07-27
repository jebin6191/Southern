import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HumanResourceRoutingModule } from './human-resource-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HumanResourceRoutingModule,
    NgbModule
  ]
})
export class HumanResourceModule { }
