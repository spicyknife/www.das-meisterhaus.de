import { TestBed } from '@angular/core/testing';

import { KonfiguratorService } from './konfigurator.service';

describe('KonfiguratorService', () => {
  let service: KonfiguratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KonfiguratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
