import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyMembersListViewComponent } from './family-members-list-view.component';

describe('FamilyMembersListViewComponent', () => {
  let component: FamilyMembersListViewComponent;
  let fixture: ComponentFixture<FamilyMembersListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyMembersListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyMembersListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
