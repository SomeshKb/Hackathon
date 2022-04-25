import { TestBed } from '@angular/core/testing';

import { FakeBackendHttpInterceptorService } from './fake-backend-http-interceptor.service';

describe('FakeBackendHttpInterceptorService', () => {
  let service: FakeBackendHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeBackendHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
