import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProblemsComponent } from './report-problems.component';

describe('ReportProblemsComponent', () => {
  let component: ReportProblemsComponent;
  let fixture: ComponentFixture<ReportProblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
