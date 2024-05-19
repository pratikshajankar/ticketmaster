import { Component } from '@angular/core';
import { LoginService } from '../../core/services/Login/login.service';
import { Loginobj } from '../../core/models/Classes/Login';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginobj:Loginobj=new Loginobj();

  constructor(private loginsrv:LoginService,private router:Router){}

  login(){
  
  this.loginsrv.getlogin(this.loginobj).subscribe((res:any)=>{
  
    if (res && res.data && res.data.role && res.data.role === "Employee" ) {
      localStorage.setItem('localuserdata',JSON.stringify(res.data));
     this.router.navigateByUrl("dashboard");
    }
    else{
      alert(res.message);
    }
  })
  }

  reset(){
    this.loginobj=new Loginobj();
  }

}
