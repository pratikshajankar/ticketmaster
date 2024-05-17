import { Component } from '@angular/core';
import { IAdmindash } from '../../../core/models/Interfaces/IAdmindash';
import { SuperadmindashService } from '../../../core/services/SuperAdminDash/superadmindash.service';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from '../../../core/models/Classes/Dashboard';
import { EmployeeDash } from '../../../core/models/Classes/EmpDash';
import { EmployeedashService } from '../../../core/services/EmployeeDash/employeedash.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  admindashList:IAdmindash[]=[];
superadmindashobj:Dashboard=new Dashboard();
employeedashobj:EmployeeDash=new EmployeeDash();



  constructor(private http:HttpClient,private admindashsrv:SuperadmindashService,private empsrv:EmployeedashService){}
  
    ngOnInit(): void {
      this.getsuperAdminDash();
      this.getemployeeDash(41);
    }
  
    getsuperAdminDash(){
  this.admindashsrv.getallAdminDash().subscribe((res:any)=>{
  this.superadmindashobj=res.data;
  })
    }

    getemployeeDash(id:any){
      this.empsrv.getAllEmpDash(id.employeeId).subscribe((res:any)=>{
        this.employeedashobj=res.data;
      })
    }
}
