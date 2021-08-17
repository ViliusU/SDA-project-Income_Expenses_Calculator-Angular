import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyMembersComponent } from './family-members.component';



@NgModule({
  declarations: [FamilyMembersComponent],
  imports: [CommonModule],
  exports: [FamilyMembersComponent]
})
export class FamilyMembersModule { }
