import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyMembersComponent } from './family-members.component';
import { FamilyMembersListModule } from './family-members-list/family-members-list.module';



@NgModule({
  declarations: [FamilyMembersComponent],
  imports: [CommonModule, FamilyMembersListModule],
  exports: [FamilyMembersComponent]
})
export class FamilyMembersModule { }
