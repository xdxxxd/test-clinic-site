import { Injectable } from '@angular/core';
import { Patient } from '../entities/patient';

const DATA: Array<Patient> = [
  {id: 1, fullName: 'Bill Johanson'},
  {id: 2, fullName: 'Antonio Babasconi'},
  {id: 3, fullName: 'Agnes Polovich'},
];

@Injectable()
export class PatientsService {
  private items: Array<Patient> = DATA;

  constructor() { }

  public getAll() {
    return this.items;
  }

  public getById(id: number) {
    return this.items[id] ? this.items[id] : null;
  }
}
