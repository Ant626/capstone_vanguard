import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';
import { timeout } from 'rxjs';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {

  name!: string;
  password!: string;
  customers: any[] = [];
  results: Customer[] = [];
  

  constructor(private router: Router, private customerService: CustomersService, private storageService: StorageService) {}

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(data => {
      console.log(data);
      this.customers = data;
    })
  }

  login() {

      timeout(30000);
      console.log(this.customers)
      console.log(this.name)

      //gets value from the array.....
      console.log(Object.values(this.customers[0]))
      const value = Object.values(this.customers[0])[0]
      //console.log(value.toString());
      
      this.results = this.customers.filter(Customer => Customer.username == this.name)
      console.log(this.results)
      localStorage.setItem("id", Object.values(this.results[0])[0])
      localStorage.setItem("firstName", Object.values(this.results[0])[2])
      if(this.results.length == 1){
        this.saveData("name", this.name);
        this.router.navigate(['/fundingforce/home']);
      }
      else{
        alert("error");
        localStorage.clear();
      }


    /*
    let url = '/fundingforce/registration';
    this.http
      .post<any>(url, {
        username: this.model.userName,
        password: this.model.password,
      })
      .subscribe((res) => {
        if (res) {
          this.sessionId = res.sessionId;

          sessionStorage.setItem('token', this.sessionId);
          this.router.navigate(['fundingforce/home']);
          console.log('Working');
        } else {
          alert('Authentication failed.');
        }
      });
    }
    */
  }

  saveData(key:string,value:string){
    localStorage.setItem(key,JSON.stringify(value));
  }

  
  getData(key:string):any{
    return JSON.parse(localStorage.getItem(key) as string);
  }
  
  
  getName(){
    return this.name;
  }

}


