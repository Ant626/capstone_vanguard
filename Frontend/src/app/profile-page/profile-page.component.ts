import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePAgeComponent implements OnInit {

  customer: any = {};
  id!: number

  constructor(private route: ActivatedRoute, private customerService: CustomersService, private router: Router) { }

  ngOnInit(): void {
    this.id = Number(window.localStorage.getItem("id"));
    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data;
      console.log(this.customer)
    })
    
  }

  switchPage(){
    this.router.navigate(['/fundingforce/updatePassword']);
  }


}
