import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/services/authguard.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }

  isError = false;
  errorMsg = '';

  constructor(private loginService:LoginService,private route:Router,private auth:AuthguardService) { }

  ngOnInit(): void {
    if(this.auth.getToken())
    {
      this.route.navigateByUrl("/managerDashboard")
    }
  }

  onSubmit(){
    this.loginService.login(this.credentials);

    if(this.auth.getToken())
    {
      this.route.navigateByUrl("/managerDashboard")
    }
    window.location.reload();
  }
}
