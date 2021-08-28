import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from '../shared/interfaces/transaction.interface';
import { TransactionsService } from '../shared/services/transactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
  transactions$: Observable<Transaction[]> | undefined

  constructor(
    private transactionsService: TransactionsService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.transactions$ = this.transactionsService.getTransactions();
  }

  navigateToTransactionAdd(){
    this.route.navigate(['transactions/add']);
  }

}
