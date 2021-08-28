import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    description: [],
    amount:[],
    transactionDate:[],
    familyMember: this.formBuilder.group ({
      id: [],
    }),
    transactionType: this.formBuilder.group({
      id: []
    })
  })

  // message: boolean = true;

  ngOnInit(): void {    
    this.familyMembers$ = this.familyMembersService.getFamilyMembers();
  }

  onSubmitButton(){
    const newTransaction = this.addTransactionForm.value;
    console.log(newTransaction);
    this.transactionsService.createTransaction(newTransaction)
    .subscribe((result)=>{
      console.log(result)
      // this.message = true;
      this.addTransactionForm.reset();
    })
  }

  // removeMessage(){
  //   this.message = false;
  // }
}
