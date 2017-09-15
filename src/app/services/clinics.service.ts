import { Injectable } from '@angular/core';
import { Clinic } from '../entities/clinic';

const CLINICS = [
  {id: 1, label: 'St. Crouse clinic-detail', description: 'St. Crouse clinic-detail description'},
  {id: 2, label: 'St. Barbara clinic-detail', description: 'St. Barbara clinic-detail description'},
  {id: 3, label: 'St. Monica clinic-detail', description: 'St. Monica clinic-detail description'},
];

@Injectable()
export class ClinicsService {

  private clinics = CLINICS;

  constructor() { }

  public getAll() {
    return this.clinics;
  }

  public getById(id: number) {
    return this.clinics[id] ? this.clinics[id] : null;
  }
}
