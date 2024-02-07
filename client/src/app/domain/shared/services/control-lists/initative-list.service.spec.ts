import { TestBed } from '@angular/core/testing';

import { InitativeListService } from './initative-list.service';

describe('InitativeListService', () => {
  let service: InitativeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitativeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
