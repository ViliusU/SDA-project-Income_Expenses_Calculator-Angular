import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { RouterModule } from '@angular/router';
import { TransactionViewModule } from './transaction-view/transaction-view.module';



@NgModule({
  declarations: [TransactionComponent],
  imports: [CommonModule, RouterModule, TransactionViewModule],
  exports: [TransactionComponent]
})
export class TransactionModule { }
