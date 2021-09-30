import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FamilyMembersPaths } from '../family-members-paths.const';
import { FamilyMember } from '../shared/inerfaces/familyMember.interface';
import { FamilyMembersService } from '../shared/services/family-members.service';

@Component({
  selector: 'app-family-members-list',
  templateUrl: './family-members-list.component.html',
  styleUrls: ['./family-members-list.component.scss']
})
export class FamilyMembersListComponent implements OnInit {
  familyMembers$: Observable<FamilyMember[]> | undefined

  constructor(
    private familyMembersService: FamilyMembersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.familyMembers$ = this.familyMembersService.getFamilyMembers();
  }

  navigateToNewFamilyMember(): void {
    this.router.navigate(['familyMembers/familyMember/new'])
  }
}
