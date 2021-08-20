import { Routes } from "@angular/router";
import { FamilyMemberComponent } from "./family-member/family-member.component";
import { FamilyMembersListComponent } from "./family-members-list/family-members-list.component";
import { FamilyMembersPaths } from "./family-members-paths.const";
import { FamilyMembersComponent } from "./family-members.component";

export const FamilyMembersRoutes: Routes = [
    {
        path: '',
        component: FamilyMembersComponent,
        children:[
            {
                //familyMembers/list
                path: '',
                pathMatch: 'full',
                redirectTo: FamilyMembersPaths.familyMembersList.path
            },
            {
                path: FamilyMembersPaths.familyMembersList.path,
                component: FamilyMembersListComponent
            },
            {
                path: FamilyMembersPaths.familyMember.path,
                component: FamilyMemberComponent
            }
            
        ]
    }
]