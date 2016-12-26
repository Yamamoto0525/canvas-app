/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DrawlineService } from './drawline.service';

describe('Service: Drawline', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawlineService]
    });
  });

  it('should ...', inject([DrawlineService], (service: DrawlineService) => {
    expect(service).toBeTruthy();
  }));
});
