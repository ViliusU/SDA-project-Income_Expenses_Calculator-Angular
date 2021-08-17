import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FamilyMember } from '../inerfaces/familyMember.interface';

@Injectable({
  providedIn: 'root'
})
export class FamilyMembersService {

  constructor(private httpClient: HttpClient) { }

  getFamilyMembers(): Observable<FamilyMember[]> {
    return this.httpClient.get<FamilyMember[]>('http://localhost:8080/api/v1/familyMember')
  }

}
