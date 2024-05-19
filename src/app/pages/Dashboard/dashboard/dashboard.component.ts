import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from '../../../core/models/Classes/Dashboard';
import { DashboardService } from '../../../core/services/Dashboard/dashboard.service';
import { EmployeeDash } from '../../../core/models/Classes/EmpDash';
import { AdminDash } from '../../../core/models/Classes/AdminDash';
import { DeptHeadDash } from '../../../core/models/Classes/DeptHeadDash';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

role:string="";
Userdata:any;
empid:number=0;

empdashobj:EmployeeDash=new EmployeeDash();
admindashobj:AdminDash=new AdminDash();
deptheaddashobj:DeptHeadDash=new DeptHeadDash();





  constructor(private http:HttpClient,private dashsrv:DashboardService){
    const userdatastring=localStorage.getItem('localuserdata');
    if(userdatastring){
      this.Userdata=JSON.parse(userdatastring);
      this.role=this.Userdata.role;
      this.empid=this.Userdata.employeeId;
    }
    else{
      console.error('No Data Found In LocalStorage');
    }
  }
  
    ngOnInit(): void {

      if(this.Userdata.role=='Employee'){
        this.getEmpDashboard();
      }

      if(this.Userdata.role=='Admin Department Employee'){
        this.getAdminDashboard();
      }

      if(this.Userdata.role=='Department Head'){
        this.getDeptHeaddashboard();
      }
    
    
    }

    getEmpDashboard(){
      this.dashsrv.getEmpDash(this.empid).subscribe((res:any)=>{
        this.empdashobj=res.data;
      })
    }

    getAdminDashboard(){
      this.dashsrv.getAdminDash(this.empid).subscribe((res:any)=>{
        this.admindashobj=res.data;
      })
    }

    getDeptHeaddashboard(){
      this.dashsrv.getDeptHeadDash(this.empid).subscribe((res:any)=>{
        this.deptheaddashobj=res.data;
      })
    }
  
  
}
