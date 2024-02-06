import { TestBed } from '@angular/core/testing';

import { ActionAreasListService } from './action-areas-list.service';

describe('ActionAreasListService', () => {
  let service: ActionAreasListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionAreasListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
