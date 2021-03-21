import { TestBed } from '@angular/core/testing';

import { GifsServicesService } from './gifs-services.service';

describe('GifsServicesService', () => {
  let service: GifsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
