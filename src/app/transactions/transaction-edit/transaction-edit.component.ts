import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
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
    private familyMembersService: FamilyMembersService,
    private transactionsService: TransactionsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
 
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
              name: new FormControl(result['name'])
            }),
          transactionType: new FormGroup({
              id: new FormControl(result['id']),
              name: new FormControl(result['name'])
            })  
      })
    })
  }

  onSubmitButton(){
    this.transactionsService.updateTransaction(this.editTransactionForm.value)
    .subscribe(()=>{
      console.log()
      this.message = true;
    })
  }

  removeMessage(){
    this.message = false;
  }

  transactionId = this.activatedRoute.snapshot.params.id;

  deleteTransaction(transactionId: number): void{
    this.transactionsService.deleteTransaction(transactionId).subscribe(()=>{
      // console.log();
      // this.ngOnInit();
      this.router.navigate(['transactions']);
    })
  }
}