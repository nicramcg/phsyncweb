import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavNewComponent } from './top-nav-new.component';

describe('TopNavNewComponent', () => {
  let component: TopNavNewComponent;
  let fixture: ComponentFixture<TopNavNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
