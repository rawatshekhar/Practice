import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleExceptionComponent } from './handle-exception.component';

describe('HandleExceptionComponent', () => {
  let component: HandleExceptionComponent;
  let fixture: ComponentFixture<HandleExceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleExceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
