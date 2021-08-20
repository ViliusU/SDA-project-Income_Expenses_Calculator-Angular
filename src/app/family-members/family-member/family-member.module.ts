import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyMemberComponent } from './family-member.component';
import { FamilyMemberViewModule } from './family-member-view/family-member-view.module';



@NgModule({
  declarations: [FamilyMemberComponent],
  imports: [CommonModule, FamilyMemberViewModule],
  exports: [FamilyMemberComponent]
})
export class FamilyMemberModule { }
