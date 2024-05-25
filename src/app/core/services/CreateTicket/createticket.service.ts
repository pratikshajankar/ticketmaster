import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class CreateticketService {

  constructor(private http:HttpClient) { }

getallticket(){
  return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_TICKET);
}

  createticket(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.CREATE_TICKET,obj)
  }

  Editticket(tid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.EDIT_TICKET+tid);
  }

  deleteTicket(id:any){
    return this.http.delete(APIConstant.API_URL+APIConstant.DELETE_TICKET+id);
  }

  assignReq(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.ASSIGN_REQ,obj);
  }

  getNewticket(id:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_NEW_TICKET+id);
  }

  getAllTicketdepthead(did:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_TICKETS_BY_DEPTHEAD+did);
  }

  getAssignTicketbyEmpid(eid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ASSIGNED_TICKET+eid);
  }

  StartTicket(tid:any){
return this.http.post(APIConstant.API_URL+APIConstant.START_TICKET,tid);
  }

  CloseTicket(id:any){
    return this.http.post(APIConstant.API_URL+APIConstant.CLOSE_TICKET,id);
  }

  getTicketCreatedbyEmp(eid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_TICKET_CREATED_BY_EMP+eid);
  }

  getEmpbyDeptid(did:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_EMP_BY_DEPTID+did);
  }
  
}
