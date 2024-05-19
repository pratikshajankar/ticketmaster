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

  savebtn:boolean=false;
  updatebtn:boolean=false;

  deptheadempList:IEmployee[]=[];

deptList:IDepartment[]=[];
deptobj:Department=new Department();

  constructor(private http:HttpClient,private deptsrv:DepartmentService,private empsrv:EmployeeService){}


  ngOnInit(): void {
   this.getAllDept(); 
   this.getallemp();
  }

getallemp(){
  this.empsrv.getAllEmployee().subscribe((res:any)=>{
    this.deptheadempList=res.data;
  })
}

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

  onEdit(obj:any){
   this.deptobj=obj;
  }

  onUpdate(){
    this.deptsrv.updateDept(this.deptobj).subscribe((res:any)=>{
      if(res.result){
        alert("data updated successfully");
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

  Showsavebtn(){
    this.savebtn=true;
    this.updatebtn=false;
  }
  Showupdatebtn(){
    this.savebtn=false;
    this.updatebtn=true;
  }

  reset(){
    this.deptobj=new  Department();
  }

}
