import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { TransactionsListModule } from './transactions-list/transactions-list.module';
import { TransactionsRoutes } from './transactions.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule,
    TransactionsListModule,
    RouterModule.forChild(TransactionsRoutes)
  ],
  exports: [TransactionsComponent]
})
export class TransactionsModule { }
