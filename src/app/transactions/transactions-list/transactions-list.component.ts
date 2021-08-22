import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
    this.transactions$ = this.transactionsService.getTransactions();
  }

}
