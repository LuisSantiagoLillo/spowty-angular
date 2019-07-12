import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingpersonalComponent } from './loadingpersonal.component';

describe('LoadingpersonalComponent', () => {
  let component: LoadingpersonalComponent;
  let fixture: ComponentFixture<LoadingpersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingpersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
