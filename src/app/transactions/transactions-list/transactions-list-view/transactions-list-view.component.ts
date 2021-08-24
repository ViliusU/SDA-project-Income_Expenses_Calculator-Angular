import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../../shared/interfaces/transaction.interface';
import { TransactionsPaths } from '../../transactions.paths.const';

@Component({
  selector: 'app-transactions-list-view',
  templateUrl: './transactions-list-view.component.html',
  styleUrls: ['./transactions-list-view.component.scss']
})
export class TransactionsListViewComponent implements OnInit {
  @Input() transactions: Transaction[] | undefined | null

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    console.log(this.transactions)
  }

  navigateToTransactionId(transactionId: number) :void{
    this.router.navigate(['transactions/transaction', transactionId])
  }

  // 'transactions/transaction'

}
