import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyMembersComponent } from './family-members.component';
import { FamilyMembersListModule } from './family-members-list/family-members-list.module';
import { RouterModule } from '@angular/router';
import { FamilyMembersRoutes } from './familyMembers.routes';
import { FamilyMemberModule } from './family-member/family-member.module';



@NgModule({
  declarations: [FamilyMembersComponent],
  imports: [
    CommonModule,
    FamilyMembersListModule,
    FamilyMemberModule,
    RouterModule.forChild(FamilyMembersRoutes)],
  exports: [FamilyMembersComponent]
})
export class FamilyMembersModule { }
