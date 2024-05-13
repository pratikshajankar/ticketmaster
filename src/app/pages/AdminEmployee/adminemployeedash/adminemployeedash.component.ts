import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminemployeeService } from '../../../core/services/AdminEmployeeDash/adminemployee.service';
import { IAdminEmp } from '../../../core/models/Interfaces/IAdminEmpdash';

@Component({
  selector: 'app-adminemployeedash',
  standalone: true,
  imports: [],
  templateUrl: './adminemployeedash.component.html',
  styleUrl: './adminemployeedash.component.css'
})
export class AdminemployeedashComponent implements OnInit{

adminempList:IAdminEmp[]=[];

  constructor(private http:HttpClient,private adminempsrv:AdminemployeeService){}

  ngOnInit(): void {
    // this.getAllAdminEmpDash(this.adminempList);
  }

  getAllAdminEmpDash(eid:any){
this.adminempsrv.getAdminEmpDash(eid.employeeId).subscribe((res:any)=>{
  this.adminempList=eid;
})
  }

}
