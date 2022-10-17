import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-update-income-page',
  templateUrl: './update-income-page.component.html',
  styleUrls: ['./update-income-page.component.css']
})
export class UpdateIncomePageComponent implements OnInit {

  newIncome!: number;
  customer: Customer[] = [];

  constructor(private router: Router, private customerService: CustomersService) { }

  ngOnInit(): void {
    this.customerService.getCustomerById(Number(window.localStorage.getItem("id"))).subscribe(data => {
      this.customer = data;
    })
  }

  updateIncome(){
   console.log(this.customer)
   this.customer[0].income = this.newIncome;
   console.log(this.customer);
   this.customerService.updateCustomerPassword(Number(window.localStorage.getItem("id")), this.customer)
   this.router.navigate(['/fundingForce/profilePage']);
  }

  goBack(){
    this.router.navigate(['/fundingforce/profilePage']);
  }

}
