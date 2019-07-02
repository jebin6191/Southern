import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../../../services/organisation.service';

@Component({
  selector: 'app-organisation-level',
  templateUrl: './organisation-level.component.html',
  styleUrls: ['./organisation-level.component.scss']
})
export class OrganisationLevelComponent implements OnInit {

  constructor(private _organisationService : OrganisationService) { }

  OrganisationLevelArr : any = [];
  ngOnInit() {
  }

  OrganisationLevels() {
    this._organisationService.getOrganisationLevels().subscribe(
      res => { this.OrganisationLevelArr = res
      })
  }

}
