import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyMembersComponent } from './family-members.component';
import { FamilyMembersListModule } from './family-members-list/family-members-list.module';
import { RouterModule } from '@angular/router';
import { FamilyMembersRoutes } from './familyMembers.routes';



@NgModule({
  declarations: [FamilyMembersComponent],
  imports: [
    CommonModule,
    FamilyMembersListModule,
    RouterModule.forChild(FamilyMembersRoutes)],
  exports: [FamilyMembersComponent]
})
export class FamilyMembersModule { }
