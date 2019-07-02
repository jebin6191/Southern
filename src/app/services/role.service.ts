import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { settings } from '../../../settings';




@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private _url: string = settings.baseUrl;

  constructor(private http: HttpClient) { }

  getRoles() : Observable<any> {
    return this.http.get<any>(this._url +'Role/AllRoles');     
  }

}
