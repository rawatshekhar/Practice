import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustmentApproveListsComponent } from './adjustment-approve-lists.component';

describe('AdjustmentApproveListsComponent', () => {
  let component: AdjustmentApproveListsComponent;
  let fixture: ComponentFixture<AdjustmentApproveListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustmentApproveListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustmentApproveListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
