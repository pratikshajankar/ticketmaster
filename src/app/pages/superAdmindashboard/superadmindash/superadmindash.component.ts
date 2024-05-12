import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SuperadmindashService } from '../../../core/services/superadmindash.service';
import { IAdmindash } from '../../../core/models/Interfaces/IAdmindash';

@Component({
  selector: 'app-superadmindash',
  standalone: true,
  imports: [],
  templateUrl: './superadmindash.component.html',
  styleUrl: './superadmindash.component.css'
})
export class SuperadmindashComponent implements OnInit {

admindashList:IAdmindash[]=[];

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
