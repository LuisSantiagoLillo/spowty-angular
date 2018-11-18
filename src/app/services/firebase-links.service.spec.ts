import { TestBed } from '@angular/core/testing';

import { FirebaseLinksService } from './firebase-links.service';

describe('FirebaseLinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseLinksService = TestBed.get(FirebaseLinksService);
    expect(service).toBeTruthy();
  });
});
