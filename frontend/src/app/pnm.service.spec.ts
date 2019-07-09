import { TestBed } from '@angular/core/testing';

import { PNMService } from './pnm.service';

describe('PNMService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PNMService = TestBed.get(PNMService);
    expect(service).toBeTruthy();
  });
});
