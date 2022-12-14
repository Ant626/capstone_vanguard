import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { ViewBudgetComponent } from './view-budget/view-budget.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { SavingsCalculatorComponent } from './savings-calculator/savings-calculator.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PayComponent } from './pay/pay.component';
import { ProfilePAgeComponent } from './profile-page/profile-page.component';
import { UpdatePasswordPageComponent } from './update-password-page/update-password-page.component';
import { UpdateIncomePageComponent } from './update-income-page/update-income-page.component';
import { UpdateSavingsPageComponent } from './update-savings-page/update-savings-page.component';



const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'fundingforce/registration', component: CreateAccountComponent}, //create account here
    {path: 'fundingforce/home', component: HomeComponent},
    {path: 'fundingforce/login', component: UserLoginComponent},
    {path: 'create-budget', component: CreateBudgetComponent},
    {path: 'view-budget/:budgetId', component: ViewBudgetComponent},
    {path: 'fundingforce/login', component: UserLoginComponent},
    {path: 'loan-calculator', component: LoanCalculatorComponent},
    {path: 'savings-calculator', component: SavingsCalculatorComponent},
    {path: 'payments', component:PaymentsPageComponent},
    {path: 'payBudget/:budgetId', component: PayComponent},
    {path: 'fundingforce/profilePage', component: ProfilePAgeComponent},
    {path: 'fundingforce/updatePassword', component: UpdatePasswordPageComponent},
    {path: 'fundingforce/updateIncome', component: UpdateIncomePageComponent},
    {path: 'fundingforce/updateSavings', component: UpdateSavingsPageComponent}
  ];

 @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    })
 export class AppRoutingModule {}







