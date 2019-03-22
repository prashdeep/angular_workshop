import { TestBed, async, inject } from '@angular/core/testing';

import { ResolveGuard } from './resolve.guard';

describe('ResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveGuard]
    });
  });

  it('should ...', inject([ResolveGuard], (guard: ResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
