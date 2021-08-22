import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsListViewComponent } from './transactions-list-view.component';

describe('TransactionsListViewComponent', () => {
  let component: TransactionsListViewComponent;
  let fixture: ComponentFixture<TransactionsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
