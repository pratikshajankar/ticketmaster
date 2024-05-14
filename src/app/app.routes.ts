import { Routes } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee/employee.component';
import { DepartmentComponent } from './pages/department/department/department.component';
import { SuperadmindashComponent } from './pages/superAdmindashboard/superadmindash/superadmindash.component';
import { AdminemployeedashComponent } from './pages/AdminEmployee/adminemployeedash/adminemployeedash.component';
import { DashboardComponent } from './pages/Dashboard/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:'employee',
        component:EmployeeComponent
    },
    {
        path:'department',
        component:DepartmentComponent
    },
    {
        path:'superadmindash',
        component:SuperadmindashComponent
    },
    {
      path:'adminemployeedash',
      component:AdminemployeedashComponent  
    },
    {
        path:'dashboard',
        component:DashboardComponent
    }
];
