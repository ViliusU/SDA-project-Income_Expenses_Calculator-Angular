import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFamilyMemberComponent } from './new-family-member.component';
import { FamilyMemberViewModule } from '../family-member/family-member-view/family-member-view.module';



@NgModule({
  declarations: [NewFamilyMemberComponent],
  imports: [CommonModule, FamilyMemberViewModule],
  exports: [NewFamilyMemberComponent]
})
export class NewFamilyMemberModule { }
