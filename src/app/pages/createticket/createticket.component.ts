import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CreateticketService } from '../../core/services/CreateTicket/createticket.service';
import { CreateTicket } from '../../core/models/Classes/Createticket';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../core/services/Employee/employee.service';
import { IEmployee } from '../../core/models/Interfaces/IEmployee';
import { DepartmentService } from '../../core/services/Department/department.service';
import { IDepartment } from '../../core/models/Interfaces/IDepartment';
import { ITicket } from '../../core/models/Interfaces/ICreateticket';
import { DatePipe } from '@angular/common';
import { Assignreq } from '../../core/models/Classes/Assignreq';

@Component({
  selector: 'app-createticket',
  standalone: true,
  imports: [FormsModule,DatePipe],
  templateUrl: './createticket.component.html',
  styleUrl: './createticket.component.css'
})
export class CreateticketComponent implements OnInit{

  role:string="";
  Userdata:any;
empid:number=0;


  savebtn:boolean=false;
  updatebtn:boolean=false;

empList:IEmployee[]=[];
deptList:IDepartment[]=[];

assigntickobj:Assignreq=new Assignreq();

ticketList:ITicket[]=[];
  createticketobj:CreateTicket=new CreateTicket();

  constructor(private http:HttpClient,private createticketsrv:CreateticketService,private empsrv:EmployeeService,private deptsrv:DepartmentService){

  }

  ngOnInit(): void {





   this.getallEmp(); 
   this.getdept();
   this.getAllTickets();
  }

  getallEmp(){
this.empsrv.getAllEmployee().subscribe((res:any)=>{
  this.empList=res.data;
})
  }

  getdept(){
this.deptsrv.getAllDepartment().subscribe((res:any)=>{
  this.deptList=res.data;
})
  }

  getAllTickets(){
    this.createticketsrv.getallticket().subscribe((res:any)=>{
      this.ticketList=res.data;
    })
  }

  createTicket(){
    this.createticketsrv.createticket(this.createticketobj).subscribe((res:any)=>{
      if(res.result){
        alert("ticket created successfully");
        this.getAllTickets();
      }
      else{
        alert(res.message);
      }
    })
  }

  onEdit(tid:any){
this.createticketsrv.Editticket(tid.ticketId).subscribe((res:any)=>{
  this.createticketobj=res.data;
})
  }

  onDelete(id:any){
    this.createticketsrv.deleteTicket(id.ticketId).subscribe((res:any)=>{
      if(res.result){
        alert("data deleted successfully");
        this.getAllTickets();
      }
      else{
        alert(res.message);
      }
    })
  }

  ShowSavebtn(){
    this.savebtn=true;
    this.updatebtn=false;
  }

  ShowUpdatebtn(){
    this.savebtn=false;
    this.updatebtn=true;
  }

  showassignform(){

  }

  assignreq(){
    this.createticketsrv.assignReq(this.assigntickobj).subscribe((res:any)=>{
      if(res.result){
        alert("ticket assigned successfully");
      }
      else{
        alert(res.message);
      }
    })
  }

  // getnewrec(id:any){
  //   this.createticketsrv.getNewticket(id.deptHeadEmpId).subscribe((res:any)=>{
  //     this.
  //   })
  // }

  reset(){
    this.createticketobj=new CreateTicket();
  }
}
