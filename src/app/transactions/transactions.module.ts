import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { TransactionsListModule } from './transactions-list/transactions-list.module';
import { TransactionsRoutes } from './transactions.routes';
import { RouterModule } from '@angular/router';
import { TransactionModule } from './transaction/transaction.module';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';



@NgModule({
  declarations: [TransactionsComponent, TransactionAddComponent],
  imports: [
    CommonModule,
    TransactionsListModule,
    TransactionModule,
    RouterModule.forChild(TransactionsRoutes)
  ],
  exports: [TransactionsComponent]
})
export class TransactionsModule { }
