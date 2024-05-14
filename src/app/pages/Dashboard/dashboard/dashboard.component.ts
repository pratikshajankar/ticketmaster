import { Component } from '@angular/core';
import { IAdmindash } from '../../../core/models/Interfaces/IAdmindash';
import { SuperadmindashService } from '../../../core/services/SuperAdminDash/superadmindash.service';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from '../../../core/models/Classes/Dashboard';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  admindashList:IAdmindash[]=[];
dashboardobj:Dashboard=new Dashboard();

  constructor(private http:HttpClient,private admindashsrv:SuperadmindashService){}
  
    ngOnInit(): void {
      this.getAllAdminDash();
    }
  
    getAllAdminDash(){
  this.admindashsrv.getallAdminDash().subscribe((res:any)=>{
  this.admindashList=res.data;
  })
    }
}
