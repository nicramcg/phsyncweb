import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOperationNgComponent } from './confirm-operation-ng.component';

describe('ConfirmOperationNgComponent', () => {
  let component: ConfirmOperationNgComponent;
  let fixture: ComponentFixture<ConfirmOperationNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmOperationNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmOperationNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
