import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyMembersListComponent } from './family-members-list.component';
import { FamilyMembersListViewComponent } from './family-members-list-view/family-members-list-view.component';



@NgModule({
  declarations: [FamilyMembersListComponent, FamilyMembersListViewComponent],
  imports: [CommonModule],
  exports: [FamilyMembersListComponent]
})
export class FamilyMembersListModule { }
