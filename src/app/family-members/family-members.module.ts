import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyMembersComponent } from './family-members.component';
import { FamilyMembersListModule } from './family-members-list/family-members-list.module';
import { RouterModule } from '@angular/router';
import { FamilyMembersRoutes } from './familyMembers.routes';
import { FamilyMemberModule } from './family-member/family-member.module';
import { NewFamilyMemberModule } from './new-family-member/new-family-member.module';



@NgModule({
  declarations: [FamilyMembersComponent],
  imports: [
    CommonModule,
    FamilyMembersListModule,
    FamilyMemberModule,
    NewFamilyMemberModule,
    RouterModule.forChild(FamilyMembersRoutes)],
  exports: [FamilyMembersComponent]
})
export class FamilyMembersModule { }
