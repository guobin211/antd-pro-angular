import { TestBed } from '@angular/core/testing';

import { JWTGuard } from './jwt.guard';

describe('JWTGuard', () => {
  let guard: JWTGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JWTGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
