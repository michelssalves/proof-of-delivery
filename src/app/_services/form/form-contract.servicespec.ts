import { TestBed } from '@angular/core/testing';

import { FormContractService } from './form-contract.service';

describe('FormContractServiceService', () => {
  let service: FormContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
