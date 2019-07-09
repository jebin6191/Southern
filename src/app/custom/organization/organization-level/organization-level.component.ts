import { Component, OnInit } from '@angular/core';
import { OrganizationlevelService } from '../../../services/administrator/organization/organization-level.service';

@Component({
  selector: 'app-organization-level',
  templateUrl: './organization-level.component.html',
  styleUrls: ['./organization-level.component.scss']
})
export class OrganizationLevelComponent implements OnInit {

  constructor(private _organizationService : OrganizationlevelService) { }

  OrganizationLevelArr : any = [];
  ngOnInit() {
  }

  OrganizationLevels() {
    this._organizationService.listOrganizationLevel().subscribe(
      res => { this.OrganizationLevelArr = res
      })
  }

}
