import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TransactionComponent, TransactionViewComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TransactionComponent]
})
export class TransactionModule { }
