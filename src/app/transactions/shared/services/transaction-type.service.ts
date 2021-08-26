import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TransactionType } from '../interfaces/transaction-type.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionTypeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  getTransactionTypes(): Observable<TransactionType[]> {
    return this.httpClient.get<TransactionType[]>(`${this.apiServerUrl}/api/v1/transactionType`);
  }

  getTransactionTypeById(transactionTypeId: string): Observable<TransactionType> {
    return this.httpClient.get<TransactionType>(`${this.apiServerUrl}/api/v1/transactionType/${transactionTypeId}`);
  }

}
