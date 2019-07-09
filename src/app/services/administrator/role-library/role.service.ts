import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { Http, Headers } from '@angular/http';

import { HttpClient } from '@angular/common/http';
import { settings } from '../../../../../settings';
import { HeaderStorageService } from '../../header-storage.service';
const API_URL = settings.apiUrl;

@Injectable()
export class RoleService {
  isEditing: boolean;
  rolevalue: any;

  constructor(private _httpclient:HttpClient, private _http: Http, private _headerStorage: HeaderStorageService) { }
  setIsEditing(value: boolean) {
    this.isEditing = value
  }
  getIsEditing() {
    return this.isEditing;
  }
  saveRoleDetail(element) {
    const headers = new Headers();
    headers.append('Token', this._headerStorage.getToken());
    return this._http.post(API_URL + 'Role/Create', element, { headers: headers });
  }

  modifyRoleDetail(element) {
    debugger;
    const headers = new Headers();
    headers.append('Token', this._headerStorage.getToken());
    return this._http.put(API_URL + 'Role/Modify', element, { headers: headers });
  }
  deleteRoleDetail(id) {
    debugger;
    const headers = new Headers();
    headers.append('Token', this._headerStorage.getToken());
    const dataUrl = API_URL + 'Role/Delete/' + id;
    return this._http.delete(dataUrl, { headers: headers });
  }
  listRoleDetails(): Observable<any> {
    debugger;

    // const headers = new Headers();
    // headers.append('Token', this._headerStorage.getToken());
    // const dataUrl = API_URL + 'Role/AllRoles';
    return this._httpclient.get(API_URL + 'Role/AllRoles',
    //  { headers: headers }
  )
  }

  listMenuesForRole(roleid): Observable<any> {
    debugger;

    // const headers = new Headers();
    // headers.append('Token', this._headerStorage.getToken());
    //const dataUrl = API_URL + 'Role/AllRoles';
    return this._http.get(API_URL + 'RoleMenuMapping/GetMenuMappingByRoleId/'+roleid);
  }
  listMenuesForRoleSave(roleid,element): Observable<any> {
    debugger;

    // const headers = new Headers();
    // headers.append('Token', this._headerStorage.getToken());
    //const dataUrl = API_URL + 'Role/AllRoles';
    return this._http.post(API_URL + 'RoleMenuMapping/Save/'+roleid,element);
  }
  setRoleVal(element: any = []) {
    debugger
    this.rolevalue = element
  }
  getRoleVal() {
    debugger
    return this.rolevalue;
  }

  handleError(error: Response) {
    return Observable.throw(error);
  }


}