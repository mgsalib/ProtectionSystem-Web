import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './ProtectionSystem-App/login/login.component';

import { MatMenuModule } from '@angular/material';
import { RegistrationComponent } from './ProtectionSystem-App/registration/registration.component';
import { FooterComponent } from './ProtectionSystem-App/footer/footer.component';
import { ForgetpasswordComponent } from './ProtectionSystem-App/forgetpassword/forgetpassword.component';
import { UserDashboardComponent } from './ProtectionSystem-App/user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './ProtectionSystem-App/user-navbar/user-navbar.component';
import { CasesOpenedComponent } from './ProtectionSystem-App/cases-opened/cases-opened.component';
import { CasesClosedComponent } from './ProtectionSystem-App/cases-closed/cases-closed.component';
import { MyAccountComponent } from './ProtectionSystem-App/my-account/my-account.component';
import { ConsultationRequestFormComponent } from './ProtectionSystem-App/consultation-request-form/consultation-request-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    ForgetpasswordComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    CasesOpenedComponent,
    CasesClosedComponent,
    MyAccountComponent,
    ConsultationRequestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
