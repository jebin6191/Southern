import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { settings } from '../../../settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  private _url: string = settings.baseUrl;
  constructor(private http: HttpClient) { }

  getOrganisationLevels() : Observable<any> {
    return this.http.get<any>(this._url +'OrganizationLevel/AllOrganizationLevel');     
  }
}
