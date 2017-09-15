import { Injectable } from '@angular/core';
import { Therapist } from '../entities/therapist';

const DATA = [
  {id: 1, fullName: 'Jack Springfield', description: ''},
  {id: 2, fullName: 'Mark Laffer', description: ''},
  {id: 3, fullName: 'Robert Paterson', description: ''},
];

@Injectable()
export class TherapistsService {

  private items: Therapist[];

  constructor() {
    this.items = DATA;
  }

  public getAll(): Therapist[] {

    return this.items;
  }

  public getById(id: number): Therapist {
    return this.items[id] ? this.items[id] : null;
  }
}
