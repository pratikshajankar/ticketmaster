import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RoleConstant } from '../../core/constant/roleConstant';
import { compileNgModule } from '@angular/compiler';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  menu:any=[];
  filterdmenus:any[]=[];
  role:string='';

  constructor(private router:Router){
    this.menu=RoleConstant.menus;
    const userData=localStorage.getItem('localuserdata');
    if(userData!=null){
      const parseobj=JSON.parse(userData);
      this.role=parseobj.role;
    }
     this.menu.forEach((element:any) => {
      const isRolePresent=element.roles.find((role:any)=>role==this.role);
      if(isRolePresent!=undefined){
        this.filterdmenus.push(element);
      }
     });
    
  }

  logout(){
    localStorage.clear();
this.router.navigate(['/login']);
  }

}
