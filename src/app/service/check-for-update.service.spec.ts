/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckForUpdateService } from './check-for-update.service';

describe('Service: CheckForUpdate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckForUpdateService]
    });
  });

  it('should ...', inject([CheckForUpdateService], (service: CheckForUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
