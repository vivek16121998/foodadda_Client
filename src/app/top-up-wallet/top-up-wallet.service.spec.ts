import { TestBed } from '@angular/core/testing';

import { TopUpWalletService } from './top-up-wallet.service';

describe('TopUpWalletService', () => {
  let service: TopUpWalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopUpWalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
