import { Registration } from './../registration';
import { FundingForceService } from './../funding-force.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  registration: Registration = new Registration();

  constructor(private FundingForceService: FundingForceService, private router: Router) { }

  ngOnInit(): void {
  }

  saveAccount(){
    this.FundingForceService.createAccount(this.registration).subscribe(data =>{
      data;
    },
    error => console.log(error));
  }

   goLogInPage(): void{
    this.router.navigate(['/fundingforce/login']);
  }
 
  onSubmit(){
      console.log(this.registration);
      this.registration.income = 0;
      this.registration.savings = 0;
      this.saveAccount();
      this.goLogInPage();
  }

}
