import { TestBed } from '@angular/core/testing';

import { DataRequestsInterceptor } from './data-requests.interceptor';

describe('DataRequestsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DataRequestsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DataRequestsInterceptor = TestBed.inject(DataRequestsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
