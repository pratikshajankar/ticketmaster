import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class EmployeedashService {

  constructor(private http:HttpClient) { }

  getAllEmpDash(eid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_EMP_DASHBOARD_BY_EMPID+eid);
  }
}
