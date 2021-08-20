import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyMemberViewComponent } from './family-member-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FamilyMemberViewComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FamilyMemberViewComponent]
})
export class FamilyMemberViewModule { }
