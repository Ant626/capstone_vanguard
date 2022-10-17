import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTurkishLira } from '@fortawesome/free-solid-svg-icons';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';
import { CustomersService } from '../customers.service';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrls: ['./payments-page.component.css']
})
export class PaymentsPageComponent implements OnInit {

  budgets: any = [];
  username!: string | undefined
  id: number | undefined;


  constructor(private budgetService: BudgetService, private router: Router, private userLoginService: UserLoginComponent, private customerService: CustomersService) { }

  ngOnInit(): void {
    
    this.getBudgets();
    /*
    this.budgetService.getBudgetByID(Number(window.localStorage.getItem("id"))).subscribe(data => {
      this.budgets = data;
      console.log(this.budgets);
    })
    */
    
    

    /*
    this.budgetService.getBudgets().subscribe(data => {
      this.budgets = data;
      console.log(this.budgets);
    })
    */
    //console.log(this.budgets)
  }
/*
  getCustomerIDByUsername(this.username): string){
    this.customerService.getCustomerIDByUsername(this.username).subscribe(data => {
      console.log(data);
    })
  }
  */

  getBudgets(){
    this.customerService.getCustomerById(parseInt(window.localStorage.getItem("id") || "")).subscribe((data: any) => {
      console.log(data.budgets);
      this.budgets = data.budgets;
    })
  }

  getBudgetsList(){
    this.budgetService.getBudgets().subscribe(data => {
      //this.budgets = data;
      //console.log(this.budgets);
    })
  }

  deleteBudgetByID(budget_id: number){
    this.budgetService.deleteBudgetByID(budget_id).subscribe(data => {
      this.getBudgets();    
    })
  }

  viewBudget(budgetId: number){
    this.router.navigate(['view-budget', budgetId]);
  }

  payBudget(budgetId: number){
    this.router.navigate(['payBudget', budgetId])
  }

}


