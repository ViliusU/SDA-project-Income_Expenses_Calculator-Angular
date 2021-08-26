import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FamilyMember } from 'src/app/family-members/shared/inerfaces/familyMember.interface';
import { FamilyMembersService } from 'src/app/family-members/shared/services/family-members.service';
import { TransactionType } from '../../shared/interfaces/transaction-type.interface';
import { Transaction } from '../../shared/interfaces/transaction.interface';
import { TransactionTypeService } from '../../shared/services/transaction-type.service';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.scss']
})
export class TransactionViewComponent implements OnInit {
  @Input() transaction: Transaction | undefined | null | any;
  // @Input() transactionTypes: TransactionType[] | undefined | null;
  // @Input() familyMembers: FamilyMember[] | undefined | null;

  @Output() updateTransaction = new EventEmitter<Transaction>();

  // transactionTypes$: Observable<TransactionType[]> | undefined | null;
  // familyMembers$: Observable<FamilyMember[]> | undefined | null;

  transactionForm = this.formBuilder.group({
    description: [, [Validators.required, Validators.maxLength(50)]],
    amount:[, [Validators.required, Validators.maxLength(7)]],
    transactionDate:[, [Validators.required]],
    familyMember: this.formBuilder.group ({
      name: [],
    }),
    transactionType: this.formBuilder.group({
      name: []
    })
  })

  constructor(
    private formBuilder: FormBuilder,
    // private transactionTypeService: TransactionTypeService,
    // private familyMembersService: FamilyMembersService

    ) { } 

  ngOnInit(): void {
    console.log(this.transactionForm)

    // this.transactionTypes$ = this.transactionTypeService.getTransactionTypes();
    // this.familyMembers$ = this.familyMembersService.getFamilyMembers();

  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes)
    if(changes.transaction.currentValue) {
       this.transactionForm.patchValue(this.transaction);
    }
  }

  onSubmitClick(): void {
    this.updateTransaction.emit(...this.transaction, ...this.transactionForm.value);
  }

}
