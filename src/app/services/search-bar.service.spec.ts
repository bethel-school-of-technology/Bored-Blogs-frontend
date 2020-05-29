import { TestBed } from '@angular/core/testing';

import { SearchBarService } from './search-bar.service';

describe('SearchBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchBarService = TestBed.get(SearchBarService);
    expect(service).toBeTruthy();
  });
});
