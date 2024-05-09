import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllEmployee(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_EMP);
  }

  getEmpbyId(id:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_EMP_BY_EMPID+id);
  }

  AddEmp(obj:any){
return this.http.post(APIConstant.API_URL+APIConstant.CREATE_EMPLOYEE,obj);
  }

  UpdateEmp(obj:any){
    return this.http.put(APIConstant.API_URL+APIConstant.UPDATE_EMP,obj);
  }

  DeleteEmp(eid:any){
    return this.http.delete(APIConstant.API_URL+APIConstant.DELETE_EMP+eid);
  }

  
}
