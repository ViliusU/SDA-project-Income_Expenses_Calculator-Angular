import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list.component';
import { RouterModule } from '@angular/router';
import { TransactionsListViewComponent } from './transactions-list-view/transactions-list-view.component';



@NgModule({
  declarations: [TransactionsListComponent, TransactionsListViewComponent],
  imports: [CommonModule, RouterModule],
  exports: [TransactionsListComponent]
})
export class TransactionsListModule { }
