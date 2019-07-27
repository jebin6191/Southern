import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { AreaComponent } from './area/area.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Location'
    },
    children: [
      {
        path: '',
        redirectTo: 'country'
      },
      {
        path: 'country',
        component: CountryComponent,
        data: {
          title: 'Country'
        }
      },
      {
        path: 'state',
        component: StateComponent,
        data: {
          title: 'State'
        }
      },
      {
        path: 'city',
        component: CityComponent,
        data: {
          title: 'City'
        }
      },
      {
        path: 'area',
        component: AreaComponent,
        data: {
          title: 'Area'
        }
      }
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LocationRoutingModule { }
