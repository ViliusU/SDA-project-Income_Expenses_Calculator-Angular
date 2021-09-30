import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FamilyMember } from '../shared/inerfaces/familyMember.interface';
import { FamilyMembersService } from '../shared/services/family-members.service';

@Component({
  selector: 'app-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.scss']
})
export class FamilyMemberComponent implements OnInit {
  familyMember$: Observable<FamilyMember> | undefined | null;

  constructor(
    private familyMembersService: FamilyMembersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const familyMemberId = this.activatedRoute.snapshot.paramMap.get('id');
    this.familyMember$ = this.familyMembersService.getFamilyMemberById(familyMemberId);
  }

  onUpdateFamilyMember(familyMember: FamilyMember) :void{
    this.familyMembersService.updateFamilyMember(familyMember).subscribe(
      ()=> this.router.navigate(['familyMembers'])
      )
  }

  onDeleteFamilyMember(familyMemberId: number ): void {
    this.familyMembersService.deleteFamilyMember(familyMemberId).subscribe(
      ()=> this.router.navigate(['familyMembers'])) 
  }
}


