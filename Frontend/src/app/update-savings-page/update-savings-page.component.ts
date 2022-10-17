import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-update-savings-page',
  templateUrl: './update-savings-page.component.html',
  styleUrls: ['./update-savings-page.component.css']
})
export class UpdateSavingsPageComponent implements OnInit {

  newSavings?: number;
  customer: Customer[] = []

  constructor(private route: Router, private customerService: CustomersService) { }

  ngOnInit(): void {
    this.customerService.getCustomerById(Number(window.localStorage.getItem("id"))).subscribe(data => {
      this.customer = data;
    })
  }

  updateSavings(){
   console.log(this.customer)
   console.log(this.customer[0].password)
   this.customer[0].savings = this.newSavings;
   console.log(this.customer);
   this.customerService.updateCustomerPassword(Number(window.localStorage.getItem("id")), this.customer)
  }
  goBack(){
    this.route.navigate(['/fundingforce/profilePage']);
  }
}
