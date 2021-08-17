import { Component, Input, OnInit } from '@angular/core';
import { FamilyMember } from '../../shared/inerfaces/familyMember.interface';

@Component({
  selector: 'app-family-members-list-view',
  templateUrl: './family-members-list-view.component.html',
  styleUrls: ['./family-members-list-view.component.scss']
})
export class FamilyMembersListViewComponent implements OnInit {
  @Input() familyMembers: FamilyMember[] | undefined | null
  constructor() { }

  ngOnInit(): void { console.log(this.familyMembers)
  }

}
