import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FamilyMember } from '../inerfaces/familyMember.interface';

@Injectable({
  providedIn: 'root'
})
export class FamilyMembersService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  getFamilyMembers(): Observable<FamilyMember[]> {
    return this.httpClient.get<FamilyMember[]>(`${this.apiServerUrl}/api/v1/familyMember`)
  }

  getFamilyMemberById(familyMemberId: string | null): Observable<FamilyMember>{
    return this.httpClient.get<FamilyMember>(`${this.apiServerUrl}/api/v1/familyMember/${familyMemberId}`);

    // arba
    // return this.httpClient.get<FamilyMember>('http://localhost:8080/api/v1/familyMember/' + familyMemberId)
  }
  
  updateFamilyMember(familyMember: FamilyMember): Observable<FamilyMember>{
    return this.httpClient.put<FamilyMember>(`${this.apiServerUrl}/api/v1/familyMember`, familyMember);
  }

  deleteFamilyMember(familyMemberId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}/api/v1/familyMember/${familyMemberId}`);
  }

  createFamilyMember(familyMember: FamilyMember): Observable<FamilyMember> {
    return this.httpClient.post<FamilyMember>(`${this.apiServerUrl}/api/v1/familyMember`, familyMember);
  }

}
