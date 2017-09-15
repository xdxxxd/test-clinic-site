/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClinicsService } from './clinics.service';

describe('ClinicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClinicsService]
    });
  });

  it('should ...', inject([ClinicsService], (service: ClinicsService) => {
    expect(service).toBeTruthy();
  }));
});
