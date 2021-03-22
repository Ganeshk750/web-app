import { TestBed } from '@angular/core/testing';

import { NotifireService } from './notifire.service';

describe('NotifireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotifireService = TestBed.get(NotifireService);
    expect(service).toBeTruthy();
  });
});
