import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/services/Employee/employee.service';
import { Employee } from '../../../core/models/Classes/Employee';
import { IEmployee } from '../../../core/models/Interfaces/IEmployee';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../core/services/Department/department.service';
import { IDepartment } from '../../../core/models/Interfaces/IDepartment';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

deptList:IDepartment[]=[];


  empobj:Employee=new Employee();
  empList:IEmployee[]=[];
  


constructor(private http:HttpClient,private empsrv:EmployeeService,private deptsrv:DepartmentService){

}

  ngOnInit(): void {
  this.getallemp();
  this.getalldept();
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
    this.empobj=eid;
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


}
