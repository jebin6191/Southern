import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationLevelComponent } from './organization-level/organization-level.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { CompanyInitiationComponent } from './company-initiation/company-initiation.component';

@NgModule({
  declarations: [OrganizationLevelComponent, CompanyInitiationComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ]
})
export class OrganisationModule { }
