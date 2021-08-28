import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { TransactionsListModule } from './transactions-list/transactions-list.module';
import { TransactionsRoutes } from './transactions.routes';
import { RouterModule } from '@angular/router';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';



@NgModule({
  declarations: [TransactionsComponent, TransactionAddComponent, TransactionEditComponent],
  imports: [
    CommonModule,
    TransactionsListModule,
    RouterModule.forChild(TransactionsRoutes),
    ReactiveFormsModule
  ],
  exports: [TransactionsComponent]
})
export class TransactionsModule { }
