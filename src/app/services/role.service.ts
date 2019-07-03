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

  saveNewRole(element) {
    // const headers = new Headers();
    // headers.append('Token', this._headerStorage.getToken());
    return this.http.post(this._url + 'Role/Create', element);
  }

  modifyRoleDetail(element) {
    debugger;
    // const headers = new Headers();
    // headers.append('Token', this._headerStorage.getToken());
    return this.http.put(this._url + 'Role/Modify', element);
  }

  deleteRoleDetail(id) {
    debugger;
    // const headers = new Headers();
    // headers.append('Token', this._headerStorage.getToken());
    // const dataUrl = API_URL + 'Role/Delete/' + id;
    return this.http.delete(this._url + 'Role/Delete/'+ id);
  }
}
