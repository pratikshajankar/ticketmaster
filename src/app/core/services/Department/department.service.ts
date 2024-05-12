import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  getAllDepartment(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_DEPARTMENT);
  }

  Createdept(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.CREATE_DEPARTMENT,obj);
  }

  updateDept(obj:any){
    return this.http.put(APIConstant.API_URL+APIConstant.UPDATE_DEPARTMENT,obj)
  }

  deleteDept(id:any){
    return this.http.delete(APIConstant.API_URL+APIConstant.DELETE_DEPARTMENT+id);
  }
}
