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
}
