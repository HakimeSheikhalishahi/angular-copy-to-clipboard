import { TestBed } from '@angular/core/testing';

import { AngularCopyToClipboardService } from './angular-copy-to-clipboard.service';

describe('AngularCopyToClipboardService', () => {
  let service: AngularCopyToClipboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularCopyToClipboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
