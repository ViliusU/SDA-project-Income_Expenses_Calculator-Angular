import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Transaction } from '../../shared/interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.scss']
})
export class TransactionViewComponent implements OnInit {
  @Input() transaction: Transaction | undefined | null | any;

  transactionForm = this.formBuilder.group({
    transactionType: [],
    description: [, [Validators.required, Validators.maxLength(50)]],
    amount:[, [Validators.required, Validators.maxLength(7)]],
    transactionDate:[, [Validators.required]],
    familyMember: this.formBuilder.group ({
      name: [, [Validators.required]]
    })
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.transactionForm)
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes)
    if(changes.transaction.currentValue) {
       this.transactionForm.patchValue(this.transaction);
    }

  }

}
