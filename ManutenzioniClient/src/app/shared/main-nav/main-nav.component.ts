import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MsalService } from '@azure/msal-angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements  OnInit,OnDestroy {

  public nameAccount: string | undefined = "";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


    @ViewChild(MatSidenav) sidenav! : MatSidenav;

    private nameAccount$ ?: Subscription;


  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private authService: MsalService, private loginService: LoginService) {
  
  }
  ngOnDestroy(): void {
   
  }
  ngOnInit(): void {
    this.nameAccount$= this.loginService.getNameAccountObservable.subscribe(resp =>{
      this.nameAccount = resp;
    });

    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) =>{
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
      else{
       // this.sidenav.mode = 'side';
        //this.sidenav.open();
      }
    })
  }


  logout(){
    this.authService.logoutPopup({
      mainWindowRedirectUri: "/"
      //this.router.navigateByUrl("/home");
    });
    this.nameAccount$?.unsubscribe();
    //this.router.navigateByUrl("/");
  }

  caricoHome(){
    this.router.navigateByUrl("home/carico");
  }

  goToOrder(){
    this.router.navigateByUrl("home/ordini");
  }

  goTohome(){
    this.router.navigateByUrl("home/home");
  }

}
