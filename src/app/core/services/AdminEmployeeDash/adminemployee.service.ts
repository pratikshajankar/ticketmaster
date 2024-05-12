import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class AdminemployeeService {

  constructor(private http:HttpClient) { }

  getAdminEmpDash(eid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ADMIN_EMPLOYEE_DASHBOARD+eid);
  }
}
