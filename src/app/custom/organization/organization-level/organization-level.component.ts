import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../../services/organization.service';

@Component({
  selector: 'app-organization-level',
  templateUrl: './organization-level.component.html',
  styleUrls: ['./organization-level.component.scss']
})
export class OrganizationLevelComponent implements OnInit {

  constructor(private _organizationService : OrganizationService) { }

  OrganizationLevelArr : any = [];
  ngOnInit() {
  }

  OrganizationLevels() {
    this._organizationService.getOrganizationLevels().subscribe(
      res => { this.OrganizationLevelArr = res
      })
  }

}
