import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationLevelComponent } from './organisation-level/organisation-level.component';
import { OrganisationRoutingModule } from './organisation-routing.module';

@NgModule({
  declarations: [OrganisationLevelComponent],
  imports: [
    CommonModule,
    OrganisationRoutingModule
  ]
})
export class OrganisationModule { }
