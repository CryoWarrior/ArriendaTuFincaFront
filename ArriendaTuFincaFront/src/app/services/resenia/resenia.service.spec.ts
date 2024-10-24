import { TestBed } from '@angular/core/testing';

import { ReseniaService } from './resenia.service';

describe('ReseniaService', () => {
  let service: ReseniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReseniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
