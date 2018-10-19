import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPanelComponent } from './music-panel.component';

describe('MusicPanelComponent', () => {
  let component: MusicPanelComponent;
  let fixture: ComponentFixture<MusicPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
