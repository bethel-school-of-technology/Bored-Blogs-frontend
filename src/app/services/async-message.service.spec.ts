import { TestBed } from '@angular/core/testing';

import { AsyncMessageService } from './async-message.service';

describe('AsyncMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsyncMessageService = TestBed.get(AsyncMessageService);
    expect(service).toBeTruthy();
  });
});
