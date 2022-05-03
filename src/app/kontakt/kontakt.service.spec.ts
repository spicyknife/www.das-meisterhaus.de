import { TestBed } from '@angular/core/testing';

import { KontaktService } from './kontakt.service';

describe('KontaktService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KontaktService = TestBed.get(KontaktService);
    expect(service).toBeTruthy();
  });
});
