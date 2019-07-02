import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';

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
      }
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LocationRoutingModule { }
