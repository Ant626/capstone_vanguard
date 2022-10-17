import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  id!: any;
  budget: any = {};
  payAmount!: number;
  constructor(private budgetService: BudgetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['budgetId'];

    this.budgetService.getBudgetByID(this.id).subscribe(data => {
      this.budget = data;
      console.log(this.budget);
    }, error => console.log(error));
  }

  onPay(){
    if(this.payAmount > this.budget.totalDue){
      alert("Pay amount is greater than total due");
    }
    else{
      console.log(this.id)
      this.budgetService.patchBudget(this.budget, this.id, this.payAmount);
      this.router.navigate(['/payments']);
    }
    console.log(this.payAmount);
  }

  onCancel(){
    this.router.navigate(['/payments']);
  }

 

}
