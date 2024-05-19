import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/services/Employee/employee.service';
import { Employee } from '../../../core/models/Classes/Employee';
import { IEmployee } from '../../../core/models/Interfaces/IEmployee';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../core/services/Department/department.service';
import { IDepartment } from '../../../core/models/Interfaces/IDepartment';
import { JsonPipe } from '@angular/common';
import { RoleService } from '../../../core/services/Role/role.service';
import { IRole } from '../../../core/models/Interfaces/IRole';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  savebutton:boolean=false;
  updatebutton:boolean=false;

deptList:IDepartment[]=[];
roleList:IRole[]=[];

  empobj:Employee=new Employee();
  empList:IEmployee[]=[];
  


constructor(private http:HttpClient,private empsrv:EmployeeService,private deptsrv:DepartmentService,private rolesrv:RoleService){

}

  ngOnInit(): void {
  this.getallemp();
  this.getalldept();
  this.getallrole();
  }

  getallrole(){
this.rolesrv.getAllrole().subscribe((res:any)=>{
this.roleList=res.data;
})
  }

  getalldept(){
    this.deptsrv.getAllDepartment().subscribe((res:any)=>{
      this.deptList=res.data;
    })
  }

getallemp(){
this.empsrv.getAllEmployee().subscribe((res:any)=>{
  this.empList=res.data;
})
}

onSave(){
  this.empsrv.AddEmp(this.empobj).subscribe((res:any)=>{
    if(res.result){
      alert("employee added successfully");
      this.getallemp();
    }
    else{
      alert(res.message);
    }
  })
}

onEdit(eid:any){
  this.empsrv.getEmpbyId(eid.employeeId).subscribe((res:any)=>{
    this.empobj=res.data;
  })
}


onUpdate(){
  this.empsrv.UpdateEmp(this.empobj).subscribe((res:any)=>{
    if(res.result){
      alert("updated successfully");
      this.getallemp();
    }
    else{
      alert(res.message);
    }
  })
}

onDelete(id:any){
  this.empsrv.DeleteEmp(id.employeeId).subscribe((res:any)=>{
    if(res.result){
      alert("data deleted successfully");
      this.getallemp();
    }
    else{
      alert(res.message);
    }
  })
}

showSavebtn(){
  this.savebutton=true;
  this.updatebutton=false;
}

showupdatebtn(){
  this.savebutton=false;
  this.updatebutton=true;
}

reset(){
  this.empobj=new Employee();
}


}
