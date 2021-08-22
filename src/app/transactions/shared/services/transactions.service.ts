import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${this.apiServerUrl}/api/v1/moneyTransaction`);
  }

  updateTransaction(transaction: Transaction): Observable<Transaction>{
    return this.httpClient.put<Transaction>(`${this.apiServerUrl}/api/v1/moneyTransaction`, transaction);
  }

  deleteTransaction(transactionId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}/api/v1/moneyTransaction/${transactionId}`);
  }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(`${this.apiServerUrl}/api/v1/moneyTransaction`, transaction);
  }


}
