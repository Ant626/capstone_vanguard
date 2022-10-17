import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from './budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private baseURL="http://localhost:8080/fundingforce/budget"
  private updateBudgetURL = "http://localhost:8080/fundingforce/payments"
  constructor(private httpClient: HttpClient) { }

  getBudgetsByCustomerID(customers_customer_id: number): Observable<Budget[]>{
    return this.httpClient.get<Budget[]>(`${this.baseURL}/${customers_customer_id}`);
  }

  getBudgetByID(customer: number): Observable<Budget[]>{
    return this.httpClient.get<Budget[]>(`${this.baseURL}/${customer}`);
  }

  getBudgets(): Observable<Budget[]>{
    return this.httpClient.get<Budget[]>(`${this.baseURL}`);
  }

  createBudget(budget: Budget): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, budget);
  }

  patchBudget(budget_id: number, budget: Budget, userInput: number): Observable<Object>{
    console.log(budget_id)
    console.log(budget)
    console.log(userInput)
    return this.httpClient.patch(`${this.updateBudgetURL}/${budget_id}`, budget, {params: {Input: userInput}});
  }

  deleteBudgetByID(budget_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${budget_id}`);
  }
}
