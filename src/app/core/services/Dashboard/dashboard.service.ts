import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getEmpDash(eid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_EMP_DASHBOARD_BY_EMPID+eid);
  }

  getDeptHeadDash(hid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_DEPTHEAD_DASHBOARD_BY_DEPTHEAD+hid);
  }

  getAdminDash(aid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ADMIN_EMPLOYEE_DASHBOARD+aid);
  }
}
