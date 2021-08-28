import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { FamilyMember } from 'src/app/family-members/shared/inerfaces/familyMember.interface';
import { FamilyMembersService } from 'src/app/family-members/shared/services/family-members.service';
import { TransactionsService } from '../shared/services/transactions.service';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.scss']
})
export class TransactionEditComponent implements OnInit {

  familyMembers$: Observable<FamilyMember[]> | undefined | null;

  constructor(
    private formBuilder: FormBuilder,
    private familyMembersService: FamilyMembersService,
    private transactionsService: TransactionsService,
    private activatedRoute: ActivatedRoute
  ) { }

  // editTransactionForm = this.formBuilder.group({
  //   description: [, [Validators.required, Validators.maxLength(50)]],
  //   amount:[, [Validators.required, Validators.maxLength(7)]],
  //   transactionDate:[, [Validators.required]],
  //   familyMember: this.formBuilder.group ({
  //     id: [, [Validators.required]],
  //   }),
  //   transactionType: this.formBuilder.group({
  //     id: [, [Validators.required]]
  //   })
  // })

  editTransactionForm = new FormGroup({
    description: new FormControl(''),
    amount:new FormControl(''),
    transactionDate:new FormControl(''),
    familyMember: new FormGroup ({
      id: new FormControl(''),
    }),
    transactionType: new FormGroup({
      id: new FormControl('')
    })
  })


  message: boolean = false;

  ngOnInit(): void {
    this.familyMembers$ = this.familyMembersService.getFamilyMembers();

    const transactionId = this.activatedRoute.snapshot.params.id;

    this.transactionsService.getTransactionById(transactionId).subscribe((result:any)=>{
        this.editTransactionForm = new FormGroup({
          id: new FormControl(result[transactionId]),
          description: new FormControl(result['description']),
          amount:new FormControl(result['amount']),
          transactionDate:new FormControl(result['transactionDate']),
          familyMember: new FormGroup ({
              id: new FormControl(result['id']),
            }),
          transactionType: new FormGroup({
              id: new FormControl(result['id'])
            })  
      })
    })
  }

  onSubmitButton(){
    const transactionId = this.activatedRoute.snapshot.params.id;
    this.transactionsService.updateTransaction(this.editTransactionForm.value)
    .subscribe(()=>{
      console.log()
      this.message = true;
    })
  }

  removeMessage(){
    this.message = false;
  }
}