import { TestBed } from '@angular/core/testing';

import { SpotifyAPIService } from './spotify-api.service';

describe('SpotifyAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyAPIService = TestBed.get(SpotifyAPIService);
    expect(service).toBeTruthy();
  });
});
