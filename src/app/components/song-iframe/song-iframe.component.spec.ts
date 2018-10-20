import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongIframeComponent } from './song-iframe.component';

describe('SongIframeComponent', () => {
  let component: SongIframeComponent;
  let fixture: ComponentFixture<SongIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
