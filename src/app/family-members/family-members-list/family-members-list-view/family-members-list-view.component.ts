import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FamilyMembersPaths } from '../../family-members-paths.const';
import { FamilyMember } from '../../shared/inerfaces/familyMember.interface';

@Component({
  selector: 'app-family-members-list-view',
  templateUrl: './family-members-list-view.component.html',
  styleUrls: ['./family-members-list-view.component.scss']
})
export class FamilyMembersListViewComponent implements OnInit {
  @Input() familyMembers: FamilyMember[] | undefined | null

  constructor(private router: Router) { }

  ngOnInit(): void { console.log(this.familyMembers)
  }

  navigateToFamilyMemberById(familyMemberId: number) :void{
    // turi nunaviguoti i familyMember su familyMember id
    this.router.navigate(['/familyMembers/familyMember', familyMemberId])
  }

}
