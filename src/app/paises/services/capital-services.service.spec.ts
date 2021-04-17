import { TestBed } from '@angular/core/testing';

import { CapitalServicesService } from './capital-services.service';

describe('CapitalServicesService', () => {
  let service: CapitalServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapitalServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
