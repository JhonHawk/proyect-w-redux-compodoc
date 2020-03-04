import { TestBed, async, inject } from '@angular/core/testing';

import { HasAccessGuard } from './has-access.guard';

describe('HasAccessGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HasAccessGuard]
    });
  });

  it('should ...', inject([HasAccessGuard], (guard: HasAccessGuard) => {
    expect(guard).toBeTruthy();
  }));
});
