import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private authService: MsalService, private loginService: LoginService){

  }

  login(){
    this.authService.loginPopup()
      .subscribe((response: AuthenticationResult) => {
        this.authService.instance.setActiveAccount(response.account);
       // this.authService.instance.getActiveAccount();
       let objAccount = this.authService.instance.getActiveAccount();
       let nameAccount = objAccount?.name;
        console.log("active account",nameAccount);
       this.loginService.setNameAccountObservable = nameAccount;


        this.router.navigateByUrl("home/home");
      });
    //this.router.navigateByUrl("home");
  }
}
