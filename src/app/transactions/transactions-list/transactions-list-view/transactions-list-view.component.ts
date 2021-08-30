import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../../shared/interfaces/transaction.interface';
import { TransactionsService } from '../../shared/services/transactions.service';

@Component({
  selector: 'app-transactions-list-view',
  templateUrl: './transactions-list-view.component.html',
  styleUrls: ['./transactions-list-view.component.scss']
})
export class TransactionsListViewComponent implements OnInit {
  @Input() transactions: Transaction[] | undefined | null

  constructor(
    private router: Router,
    private transactionsService: TransactionsService
    ) { }

  ngOnInit(): void {

      // console.log(this.transactions)
  }

  navigateToTransactionId(transactionId: number) :void{
    this.router.navigate(['transactions/transaction', transactionId])
  }

  // 'transactions/transaction'
  
}
