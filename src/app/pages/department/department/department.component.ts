import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../../core/services/Department/department.service';
import { IDepartment } from '../../../core/models/Interfaces/IDepartment';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Department } from '../../../core/models/Classes/Department';
import { EmployeeService } from '../../../core/services/Employee/employee.service';
import { IEmployee } from '../../../core/models/Interfaces/IEmployee';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule,DatePipe],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit{

  deptheadempList:IEmployee[]=[];

deptList:IDepartment[]=[];
deptobj:Department=new Department();

  constructor(private http:HttpClient,private deptsrv:DepartmentService,private empsrv:EmployeeService){}


  ngOnInit(): void {
   this.getAllDept(); 
  //  this.getdeptEmp(this.deptheadempList);
  }

// getdeptEmp(id:any){
// this.empsrv.getEmpbyDept(id.deptId).subscribe((res:any)=>{
//   this.deptheadempList=id;
// })
// }

  getAllDept(){
this.deptsrv.getAllDepartment().subscribe((res:any)=>{
this.deptList=res.data;
})
  }

  onSave(){
    this.deptsrv.Createdept(this.deptobj).subscribe((res:any)=>{
      if(res.result){
        alert("data saved successfully");
        this.getAllDept();
      }
      else{
        alert(res.message);
      }
    })
  }

  

  onDelete(did:any){
this.deptsrv.deleteDept(did.deptId).subscribe((res:any)=>{
  if(res.result){
    alert("data deleted successfully");
    this.getAllDept();
  }
  else{
    alert(res.message);
  }

})
  }

}
