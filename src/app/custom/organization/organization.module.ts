import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationLevelComponent } from './organization-level/organization-level.component';
import { OrganizationRoutingModule } from './organization-routing.module';

@NgModule({
  declarations: [OrganizationLevelComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ]
})
export class OrganisationModule { }
