import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ProtectionSystem-App/login/login.component';
import { ForgetpasswordComponent } from './ProtectionSystem-App/forgetpassword/forgetpassword.component';
import { UserDashboardComponent } from './ProtectionSystem-App/user-dashboard/user-dashboard.component';
import { CasesClosedComponent } from './ProtectionSystem-App/cases-closed/cases-closed.component';
import { CasesOpenedComponent } from './ProtectionSystem-App/cases-opened/cases-opened.component';
import { MyAccountComponent } from './ProtectionSystem-App/my-account/my-account.component';
import { ConsultationRequestFormComponent } from './ProtectionSystem-App/consultation-request-form/consultation-request-form.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "Login", component: LoginComponent },
  { path: "Forgetpassword", component: ForgetpasswordComponent },
  { path: "UserDashboard", component: UserDashboardComponent },
  { path: "OpenedCases", component: CasesOpenedComponent },
  { path: "ClosedCases", component: CasesClosedComponent },
  { path: "MyAccount", component: MyAccountComponent },
  { path: "ConsultationRequestForm", component: ConsultationRequestFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
