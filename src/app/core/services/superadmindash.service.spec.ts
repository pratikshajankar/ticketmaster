import { TestBed } from '@angular/core/testing';

import { SuperadmindashService } from './superadmindash.service';

describe('SuperadmindashService', () => {
  let service: SuperadmindashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperadmindashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
