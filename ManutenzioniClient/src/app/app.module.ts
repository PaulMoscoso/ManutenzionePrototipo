import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { MsalGuard, MsalInterceptor, MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

const isIE = window.navigator.userAgent.indexOf('MSIE') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

export function MSALInstanceFactory() : IPublicClientApplication
{
  return new PublicClientApplication({
    auth: {
      clientId: '7d5369c1-cbe5-4d16-a6f0-9b0ea8ed7ebf',
          authority:'https://login.microsoftonline.com/d6883a32-fec7-487f-b53c-bd05e5274696',
          redirectUri:'/',
    }
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MsalModule,
    //sLoginModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
      //useClass: MsalInterceptor
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
