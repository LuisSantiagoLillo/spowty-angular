import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveAudioPlayerComponent } from './responsive-audio-player.component';

describe('ResponsiveAudioPlayerComponent', () => {
  let component: ResponsiveAudioPlayerComponent;
  let fixture: ComponentFixture<ResponsiveAudioPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveAudioPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveAudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
