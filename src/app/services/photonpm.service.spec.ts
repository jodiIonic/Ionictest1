import { TestBed } from '@angular/core/testing';

import { PhotonpmService } from './photonpm.service';

describe('PhotonpmService', () => {
  let service: PhotonpmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotonpmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
