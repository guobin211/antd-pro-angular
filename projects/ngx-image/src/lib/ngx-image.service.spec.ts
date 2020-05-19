import { TestBed } from '@angular/core/testing';

import { NgxImageService } from './ngx-image.service';

describe('NgxImageService', () => {
  let service: NgxImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
