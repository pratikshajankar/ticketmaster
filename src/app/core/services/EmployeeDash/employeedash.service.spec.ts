import { TestBed } from '@angular/core/testing';

import { EmployeedashService } from './employeedash.service';

describe('EmployeedashService', () => {
  let service: EmployeedashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeedashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
