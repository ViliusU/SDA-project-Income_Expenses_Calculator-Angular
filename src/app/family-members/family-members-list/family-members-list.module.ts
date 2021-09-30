import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyMembersListComponent } from './family-members-list.component';
import { FamilyMembersListViewComponent } from './family-members-list-view/family-members-list-view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FamilyMembersListComponent, FamilyMembersListViewComponent],
  imports: [CommonModule, RouterModule],
  exports: [FamilyMembersListComponent]
})
export class FamilyMembersListModule { }
