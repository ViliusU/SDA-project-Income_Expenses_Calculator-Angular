import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from '../shared/interfaces/transaction.interface';
import { TransactionsService } from '../shared/services/transactions.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transaction$: Observable<Transaction> | undefined;

  constructor(
    private transactionsService: TransactionsService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const transactionId = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(transactionId);
    this.transaction$ = this.transactionsService.getTransactionById(transactionId);

    // this.transaction$.subscribe(console.log)
  }

}
