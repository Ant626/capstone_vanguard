import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer'

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  
  private baseURL = "http://localhost:8080/fundingforce/customer"
  private baseURLUsername = "http://localhost:8080/fundingforce/username"
  private passwordUrl = "http://localhost:8080/fundingforce/updatePassword"
  constructor(private httpclient: HttpClient) { }

  getAllCustomers(): Observable<Customer[]>{
    return this.httpclient.get<Customer[]>(`${this.baseURL}`);
  }

  getCustomerById(customerId: number): Observable<any[]>{
    return this.httpclient.get<any[]>(`${this.baseURL}/${customerId}`);
  }

  getCustomerIDByUsername(username: string): Observable<Customer[]>{
    return this.httpclient.get<Customer[]>(`${this.baseURLUsername}/${username}`)
  }

  patchCustomerPassword(customerId: number, customer: Customer[]): Observable<Customer[]>{
    console.log(customer)
    console.log(customerId)
    console.log(`${this.passwordUrl}/${customerId}`);
    return this.httpclient.patch<Customer[]>(`${this.passwordUrl}/${customerId}`, customer);
  }

  updateCustomerPassword(customerId:number, customer: Customer[]): Observable<any[]>{
    return this.httpclient.put<Customer[]>(`${this.passwordUrl}/${customerId}`, customer);
  }

}
