import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { TransactionsRoutes } from './transactions.routes';
import { RouterModule } from '@angular/router';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [TransactionsComponent, TransactionAddComponent, TransactionEditComponent, TransactionListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TransactionsRoutes),
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [TransactionsComponent],
})
export class TransactionsModule { }
