import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRole } from '../interfaces/IRole';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private _url: string = 'http://api.zilding.com/Role/AllRoles';

  constructor(private http: HttpClient) { }

  getRoles() : Observable<IRole[]> {
    return this.http.get<IRole[]>(this._url);     
  }

}
