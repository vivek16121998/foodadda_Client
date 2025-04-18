import { TestBed } from '@angular/core/testing';

import { TransferdataService } from './transferdata.service';

describe('TransferdataServiceService', () => {
  let service: TransferdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
