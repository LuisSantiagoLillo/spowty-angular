import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireChatComponent } from './fire-chat.component';

describe('FireChatComponent', () => {
  let component: FireChatComponent;
  let fixture: ComponentFixture<FireChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
