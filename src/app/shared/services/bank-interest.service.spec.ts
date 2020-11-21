import { TestBed } from '@angular/core/testing';

import { BankInterestService } from './bank-interest.service';

describe('BankInterestService', () => {
  let service: BankInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
