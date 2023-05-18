import { TestBed } from '@angular/core/testing';

import { HomeCaricoService } from './home-carico.service';

describe('HomeCaricoService', () => {
  let service: HomeCaricoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeCaricoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
