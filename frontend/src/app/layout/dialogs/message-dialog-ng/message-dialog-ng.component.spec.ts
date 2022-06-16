import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDialogNgComponent } from './message-dialog-ng.component';

describe('MessageDialogNgComponent', () => {
  let component: MessageDialogNgComponent;
  let fixture: ComponentFixture<MessageDialogNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDialogNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDialogNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
