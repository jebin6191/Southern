import { Injectable, ApplicationInitStatus } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { settings } from '../../../../../settings';
import { HeaderStorageService } from '../../header-storage.service';

const API_URL = settings.apiUrl;

@Injectable()
export class UserAccountService {

  userCompany: any;
  isEditing: boolean;
  userDetails: any;

  constructor(private _httpclient: HttpClient, private _http: Http, private _headerStorage: HeaderStorageService) { }
  
  setUserVal(value: any[]) {
    debugger;
    this.userCompany = value;
    console.log(this.userCompany);
  }

  getUserVal() {
    debugger
    return this.userCompany;
  }

  saveUserAccount(element) {
    // const headers = new Headers();
    // headers.append('Token', this._headerStorage.getToken());
    return this._httpclient.post(API_URL + 'User/Create', element);
  }

  listMenuesForUserSave(userid,element): Observable<any> {
    // const headers = new Headers();
    // headers.append('Token', this._headerStorage.getToken());
    //const dataUrl = API_URL + 'Role/AllRoles';
    return this._http.post(API_URL + 'UserMenuMapping/Save/'+userid,element);
  }
  getUserMenu(comId) {
    
    // 
    // const headers = new Headers();
    // headers.append('Token', this._headerStorage.getToken());
    return this._http.get(API_URL + 'User/GetUsersByCompId/'+ comId);
  }

  getMenuesByuserid(id){
    return this._http.get(API_URL + 'UserMenuMapping/GetMenuMappingByUserId/'+ id);
  }
  setIsEditing(value: boolean) {
    
    this.isEditing = value
  }
  getIsEditing() {
    return this.isEditing;
  }

  updateUserDetail(element) {    
    // const headers = new Headers();
    // headers.append('Token', this._headerStorage.getToken());
    return this._http.post(API_URL + 'User/Modify' ,element);
  }

  companyIdByUserId(element) {
    
    const headers = new Headers();
    headers.append('Token', this._headerStorage.getToken());
    return this._http.get(API_URL + 'User/GetUserById/' + element, { headers: headers });
  }


  RoleIdByUserId(element) {
    
    const headers = new Headers();
    headers.append('Token', this._headerStorage.getToken());
    return this._http.get(API_URL + 'User/GetUserById/' + element, { headers: headers });
  }

  listUserAccountDetails(): Observable<any> {
    
    // const headers = new Headers();
    // headers.append('Token', this._headerStorage.getToken());
    
    return this._httpclient.get(API_URL + 'User/AllUsers') 
     
  }

  deleteUserDetail(id) {
    
    const headers = new Headers();
    headers.append('Token', this._headerStorage.getToken());
    const dataUrl = API_URL + 'User/Delete/' + id;
    return this._http.delete(dataUrl, { headers: headers });
  }

  CheckUserName(name) {

    
    const headers = new Headers();
    headers.append('Token', this._headerStorage.getToken());
    const dataUrl = API_URL + 'User/CheckUsername/' + name;
    return this._http.post(dataUrl, { headers: headers });
  }

  CheckEmailId(mailId) {

    
    const headers = new Headers();
    headers.append('Token', this._headerStorage.getToken());
    const dataUrl = API_URL + 'User/CheckUserEmailId/' + mailId;
    return this._http.post(dataUrl, { headers: headers });
  }
  handleError(error: Response) {
    return Observable.throw(error);
  }


}
