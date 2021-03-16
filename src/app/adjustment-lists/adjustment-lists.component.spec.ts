import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustmentListsComponent } from './adjustment-lists.component';

describe('AdjustmentListsComponent', () => {
  let component: AdjustmentListsComponent;
  let fixture: ComponentFixture<AdjustmentListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustmentListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustmentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
