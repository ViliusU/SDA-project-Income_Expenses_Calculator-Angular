import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionViewComponent } from './transaction-view.component';



@NgModule({
  declarations: [TransactionViewComponent],
  imports: [CommonModule],
  exports: [TransactionViewComponent]
})
export class TransactionViewModule { }
