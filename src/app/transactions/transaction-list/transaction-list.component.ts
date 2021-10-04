import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from '../shared/interfaces/transaction.interface';
import { TransactionsService } from '../shared/services/transactions.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  transactions:any=[];
  public page: number = 1;
  public pageSize: number = 10;

  constructor(
    private route: Router,
    private transactionsService: TransactionsService
  ) { }

  ngOnInit(): void {
    this.transactionsService.getTransactions()
    .subscribe((transactionsData)=> {
      console.log(transactionsData)
      this.transactions = transactionsData;
    });
  }

  navigateToTransactionAdd(){
    this.route.navigate(['transactions/add']);
  }

  navigateToTransactionId(transactionId: number){
    this.route.navigate(['transactions/transaction', transactionId]);
  }

}
