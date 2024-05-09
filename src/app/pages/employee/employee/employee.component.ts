import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/services/Employee/employee.service';
import { Employee } from '../../../core/models/Classes/Employee';
import { IEmployee } from '../../../core/models/Interfaces/IEmployee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  empobj:Employee=new Employee();
  empList:IEmployee[]=[];
  


constructor(private http:HttpClient,private empsrv:EmployeeService){

}

  ngOnInit(): void {
  this.getallemp();
  }

getallemp(){
this.empsrv.getAllEmployee().subscribe((res:any)=>{
  this.empList=res.data;
})
}


}
