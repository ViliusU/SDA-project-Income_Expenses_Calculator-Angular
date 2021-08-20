import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FamilyMember } from '../../shared/inerfaces/familyMember.interface';

@Component({
  selector: 'app-family-member-view',
  templateUrl: './family-member-view.component.html',
  styleUrls: ['./family-member-view.component.scss']
})
export class FamilyMemberViewComponent implements OnInit {
  @Input() familyMember: FamilyMember | undefined | null | any;
  @Output() updateFamilyMember = new EventEmitter<FamilyMember>();
  @Output() deleteFamilyMember = new EventEmitter<number>();

  familyMemberForm = this.formBuilder.group({
    name: [, [Validators.required, Validators.maxLength(20)]]
  })
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.familyMemberForm)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes.familyMember.currentValue) {
      this.familyMemberForm.patchValue(this.familyMember);
    }
  }

  onSubmitClick(): void {
    this.updateFamilyMember.emit({...this.familyMember, ...this.familyMemberForm.value})

  }

  onDeleteClick(): void {
    this.deleteFamilyMember.emit(this.familyMember.id);
  }

}
