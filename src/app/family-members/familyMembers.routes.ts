import { Routes } from "@angular/router";
import { FamilyMemberComponent } from "./family-member/family-member.component";
import { FamilyMembersListComponent } from "./family-members-list/family-members-list.component";
import { FamilyMembersPaths } from "./family-members-paths.const";
import { FamilyMembersComponent } from "./family-members.component";
import { NewFamilyMemberComponent } from "./new-family-member/new-family-member.component";

export const FamilyMembersRoutes: Routes = [
    {
        path: '',
        component: FamilyMembersComponent,
        children:[
            {
                //familyMembers/list
                path: '',
                pathMatch: 'full',
                // redirectTo: FamilyMembersPaths.familyMembersList.path
                redirectTo: 'list'
            },
            {
                //familyMembers/list
                path: 'list',
                // path: FamilyMembersPaths.familyMembersList.path,
                component: FamilyMembersListComponent
            },
            {
                //familyMembers/familyMembers/id
                path: 'familyMember/:id',
                // path: FamilyMembersPaths.familyMember.path,
                component: FamilyMemberComponent
            },
            {
                //familyMembers/familyMember/new
                path: 'familyMember/new',
                // path: FamilyMembersPaths.newFamilyMember.path,
                component: NewFamilyMemberComponent
            }
            
        ]
    }
]