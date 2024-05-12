import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class SuperadmindashService {

  constructor(private http:HttpClient) { }

  getallAdminDash(){
  return  this.http.get(APIConstant.API_URL+APIConstant.GET_SUPER_ADMIN_DASHBOARD);
  }

}
