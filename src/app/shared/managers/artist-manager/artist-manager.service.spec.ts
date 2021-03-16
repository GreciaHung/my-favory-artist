import { TestBed } from '@angular/core/testing';

import { ArtistManagerService } from './artist-manager.service';

describe('ArtistManagerService', () => {
  let service: ArtistManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
