/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogUpdateService } from './log-update.service';

describe('Service: LogUpdate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogUpdateService]
    });
  });

  it('should ...', inject([LogUpdateService], (service: LogUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
