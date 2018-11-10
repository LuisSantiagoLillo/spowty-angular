import { TestBed } from '@angular/core/testing';

import { ReportIssuesService } from './report-issues.service';

describe('ReportIssuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportIssuesService = TestBed.get(ReportIssuesService);
    expect(service).toBeTruthy();
  });
});
