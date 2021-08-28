import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FamilyMember } from 'src/app/family-members/shared/inerfaces/familyMember.interface';
import { FamilyMembersService } from 'src/app/family-members/shared/services/family-members.service';
import { TransactionsService } from '../shared/services/transactions.service';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss']
})
export class TransactionAddComponent implements OnInit {

    familyMembers$: Observable<FamilyMember[]> | undefined | null;

  constructor(
    private formBuilder: FormBuilder,
    private familyMembersService: FamilyMembersService,
    private transactionsService: TransactionsService
  ) { }


  addTransactionForm = this.formBuilder.group({
    description: [, [Validators.required, Validators.maxLength(50)]],
    amount:[, [Validators.required, Validators.maxLength(7)]],
    transactionDate:[, [Validators.required]],
    familyMember: this.formBuilder.group ({
      id: [, [Validators.required]],
    }),
    transactionType: this.formBuilder.group({
      id: [, [Validators.required]]
    })
  })

  message: boolean = false;

  ngOnInit(): void {    
    this.familyMembers$ = this.familyMembersService.getFamilyMembers();
  }

  onSubmitButton(){
    const newTransaction = this.addTransactionForm.value;
    console.log(newTransaction);
    this.transactionsService.createTransaction(newTransaction)
    .subscribe((result)=>{
      console.log(result)
      this.message = true;
      this.addTransactionForm.reset();
    })
  }

  removeMessage(){
    this.message = false;
  }
}
