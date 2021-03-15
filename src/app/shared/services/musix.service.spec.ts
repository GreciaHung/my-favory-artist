import { TestBed } from '@angular/core/testing';

import { MusixService } from './musix.service';

describe('MusixService', () => {
  let service: MusixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
