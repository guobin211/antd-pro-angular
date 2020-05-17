/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PromptUpdateService } from './prompt-update.service';

describe('Service: PromptUpdate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromptUpdateService]
    });
  });

  it('should ...', inject([PromptUpdateService], (service: PromptUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
