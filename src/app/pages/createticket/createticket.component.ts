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
import { CommonModule, DatePipe } from '@angular/common';
import { Assignreq } from '../../core/models/Classes/Assignreq';

@Component({
  selector: 'app-createticket',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './createticket.component.html',
  styleUrl: './createticket.component.css'
})
export class CreateticketComponent implements OnInit {

// role:'Employee' | 'Admin Department Employee' | 'Department Head' | undefined; 

  role: string = "";
  Userdata: any;
  empid: number = 0;
  ticketDeptId: number = 0;


  savebtn: boolean = false;
  updatebtn: boolean = false;

  empList: IEmployee[] = [];
  deptList: IDepartment[] = [];

  assigntickobj: Assignreq = new Assignreq();

  ticketList: ITicket[] = [];
  createticketobj: CreateTicket = new CreateTicket();

  constructor(private http: HttpClient, private createticketsrv: CreateticketService, private empsrv: EmployeeService, private deptsrv: DepartmentService) {

    const userDataString = localStorage.getItem('localuserdata');
    if (userDataString) {
      this.Userdata = JSON.parse(userDataString);
      this.role = this.Userdata.role;
      this.empid = this.Userdata.employeeId;
      this.ticketDeptId = this.Userdata.deptId;

      this.createticketobj.createdByEmployee = this.Userdata.employeeName;
      this.createticketobj.employeeId = this.Userdata.employeeId;
    }
    else {
      console.error('No data found in localStorage');
    }

  }

  ngOnInit(): void {
    if (this.Userdata.role == 'Employee') {
      this.getTicketCreatebyEmp(this.empid);
    }
    if (this.Userdata.role == 'Admin Department Employee') {
      this.getassignticketbyEmpid(this.empid);
    }
    if (this.Userdata.role == 'Department Head') {
      this.getEmpbyDeptid(this.ticketDeptId);
    }

    this.getallEmp();
    this.getdept();
    this.getAllTickets();
  }

  getTicketCreatebyEmp(empid: any) {
    this.createticketsrv.getTicketCreatedbyEmp(empid).subscribe((res: any) => {
      this.ticketList = res.data;
    })
  }

  getEmpbyDeptid(did: any) {
    this.createticketsrv.getEmpbyDeptid(did).subscribe((res: any) => {
      this.empList = res.data;
    })
  }

  getallEmp() {
    this.empsrv.getAllEmployee().subscribe((res: any) => {
      this.empList = res.data;
    })
  }

  getdept() {
    this.deptsrv.getAllDepartment().subscribe((res: any) => {
      this.deptList = res.data;
    })
  }

  getAllTickets() {
    this.createticketsrv.getallticket().subscribe((res: any) => {
      this.ticketList = res.data;
    })
  }

  createTicket() {
    this.createticketsrv.createticket(this.createticketobj).subscribe((res: any) => {
      if (res.result) {
        alert("ticket created successfully");
        this.getAllTickets();
      }
      else {
        alert(res.message);
      }
    })
  }

  onEdit(tid: any) {
    this.createticketsrv.Editticket(tid.ticketId).subscribe((res: any) => {
      this.createticketobj = res.data;
    })
  }

  onDelete(id: any) {
    this.createticketsrv.deleteTicket(id.ticketId).subscribe((res: any) => {
      if (res.result) {
        alert("data deleted successfully");
        this.getAllTickets();
      }
      else {
        alert(res.message);
      }
    })
  }

  ShowSavebtn() {
    this.savebtn = true;
    this.updatebtn = false;
  }

  ShowUpdatebtn() {
    this.savebtn = false;
    this.updatebtn = true;
  }

  showassignform() {

  }

  assignreq() {
    this.createticketsrv.assignReq(this.assigntickobj).subscribe((res: any) => {
      if (res.result) {
        alert("ticket assigned successfully");
      }
      else {
        alert(res.message);
      }
    })
  }

  getalltickdepthead(deptHeadEmpId: number) {
    this.createticketsrv.getAllTicketdepthead(deptHeadEmpId).subscribe((res: any) => {
      this.ticketList = res.data;
    })
  }

  getnewticket(deptHeadEmpId: number) {
    this.createticketsrv.getNewticket(deptHeadEmpId).subscribe((res: any) => {
      this.ticketList = res.data;
    })
  }

  getassignticketbyEmpid(empId: number) {
    this.createticketsrv.getAssignTicketbyEmpid(empId).subscribe((res: any) => {
      this.ticketList = res.data;
    })
  }

  assignTicket(ticketId: any) {
    this.assigntickobj.ticketId = ticketId;
    console.log("Selected Ticket ID:", this.assigntickobj.ticketId);
  }

  startTicket(ticketId: number) {
    this.assignTicket(ticketId);
    this.createticketsrv.StartTicket(ticketId).subscribe((res: any) => {
      if (res.result) {
        alert("Ticket is In-Progress");
        this.getassignticketbyEmpid(this.empid);
      }
      else {
        alert(res.message);
      }
    })
  }

  closeticket(ticketId: number) {
    this.assignTicket(ticketId);
    this.createticketsrv.CloseTicket(ticketId).subscribe((res: any) => {
      if (res.result) {
        alert("Ticket Closed");
        this.getassignticketbyEmpid(this.empid);
      }
      else {
        alert(res.message);
      }
    })
  }

  reset() {
    this.createticketobj = new CreateTicket();
  }
}
