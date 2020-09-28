import { TestBed } from '@angular/core/testing';

import { SenduserService } from './senduser.service';

describe('SenduserService', () => {
  let service: SenduserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenduserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
