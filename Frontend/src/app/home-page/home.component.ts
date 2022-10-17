import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';
import { StorageService } from '../storage.service';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customerID?: number;
  name!: any;

  customers: Customer[] = [];
  value!: string;
    
  constructor(private storageService: StorageService, private customerService: CustomersService, private userLoginService: UserLoginComponent) { }

  ngOnInit(): void {
    this.name = window.localStorage.getItem("firstName") || "";
    console.log(this.name)

  }


  

}


