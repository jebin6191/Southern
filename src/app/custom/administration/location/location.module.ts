import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { LocationRoutingModule } from './location-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { AreaComponent } from './area/area.component';

@NgModule({
  declarations: [CountryComponent, StateComponent, CityComponent, AreaComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LocationModule { }
