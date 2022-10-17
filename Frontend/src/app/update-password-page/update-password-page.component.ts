import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-update-password-page',
  templateUrl: './update-password-page.component.html',
  styleUrls: ['./update-password-page.component.css']
})
export class UpdatePasswordPageComponent implements OnInit {

  newPassword!: string;
  customer: any = {}

  constructor(private route: Router, private customerService: CustomersService) { }

  ngOnInit(): void {
    this.customerService.getCustomerById(Number(window.localStorage.getItem("id"))).subscribe(data => {
      this.customer = data;
    })
  }

  updatePassword(){
   console.log(this.customer)
   this.customer.password = this.newPassword;
   console.log(this.customer);
   this.customerService.updateCustomerPassword(Number(window.localStorage.getItem("id")), this.customer)
  }
}
