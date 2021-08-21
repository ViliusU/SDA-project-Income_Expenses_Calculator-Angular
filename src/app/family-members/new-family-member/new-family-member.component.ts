import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FamilyMembersPaths } from '../family-members-paths.const';
import { FamilyMember } from '../shared/inerfaces/familyMember.interface';
import { FamilyMembersService } from '../shared/services/family-members.service';

@Component({
  selector: 'app-new-family-member',
  templateUrl: './new-family-member.component.html',
  styleUrls: ['./new-family-member.component.scss']
})
export class NewFamilyMemberComponent implements OnInit {

  initialDetails$: Observable<{ name: null; id: null }> = of({
    id: null,
    name: null
  })

  constructor(
    private familyMembersService: FamilyMembersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onUpdate(familyMember: FamilyMember): void {
    console.log(familyMember)
    this.familyMembersService.createFamilyMember(familyMember).subscribe(
      (newFamilyMember) => this.router.navigate(['familyMembers/familyMember', newFamilyMember.id]))
  }

}
