import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  getAllrole(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_ROLE);
  }
}
