import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FamilyMember } from '../shared/inerfaces/familyMember.interface';
import { FamilyMembersService } from '../shared/services/family-members.service';

@Component({
  selector: 'app-family-members-list',
  templateUrl: './family-members-list.component.html',
  styleUrls: ['./family-members-list.component.scss']
})
export class FamilyMembersListComponent implements OnInit {
  familyMembers$: Observable<FamilyMember[]> | undefined

  constructor(private familyMembersService: FamilyMembersService) { }

  ngOnInit(): void {
    this.familyMembers$ = this.familyMembersService.getFamilyMembers();
  }
}
