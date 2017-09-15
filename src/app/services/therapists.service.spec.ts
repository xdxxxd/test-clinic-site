/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TherapistsService } from './therapists.service';

describe('TherapistsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TherapistsService]
    });
  });

  it('should ...', inject([TherapistsService], (service: TherapistsService) => {
    expect(service).toBeTruthy();
  }));
});
