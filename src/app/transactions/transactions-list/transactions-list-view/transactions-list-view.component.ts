import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../../shared/interfaces/transaction.interface';
import { TransactionsService } from '../../shared/services/transactions.service';

@Component({
  selector: 'app-transactions-list-view',
  templateUrl: './transactions-list-view.component.html',
  styleUrls: ['./transactions-list-view.component.scss']
})
export class TransactionsListViewComponent implements OnInit {
  @Input() transactions: Transaction[] | undefined | null

  constructor() { }

  ngOnInit(): void {
  }

}
