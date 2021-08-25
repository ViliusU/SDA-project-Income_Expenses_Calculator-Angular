import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Transaction } from '../../shared/interfaces/transaction.interface';
import { TransactionsService } from '../../shared/services/transactions.service';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.scss']
})
export class TransactionViewComponent implements OnInit {
  @Input() transaction: Transaction | undefined | null | any;
  @Input() transactions: Transaction[] | undefined | null;
  
  transactions$: Observable<Transaction[]> | undefined;


  transactionForm = this.formBuilder.group({
    transactionType: [],
    description: [, [Validators.required, Validators.maxLength(50)]],
    amount:[, [Validators.required, Validators.maxLength(7)]],
    transactionDate:[, [Validators.required]],
    familyMember: this.formBuilder.group ({
      name: [, [Validators.required]]
    })
  })

  constructor(
    private formBuilder: FormBuilder,
    private transactionsService: TransactionsService
    ) { }

  ngOnInit(): void {
    console.log(this.transactionForm)

    this.transactions$ = this.transactionsService.getTransactions();

  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes)
    if(changes.transaction.currentValue) {
       this.transactionForm.patchValue(this.transaction);
    }

  }

}
