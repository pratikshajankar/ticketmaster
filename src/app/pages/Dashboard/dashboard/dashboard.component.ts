import { Component } from '@angular/core';
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




  constructor(private http:HttpClient){}
  
    ngOnInit(): void {
    
    }
  
  
}
