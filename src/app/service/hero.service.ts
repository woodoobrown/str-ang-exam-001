import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  dataList: Hero[] = [
    {
    id: 1,
    name: 'Superman',
    superPower: 'Super strength',
    address: '88 Super Street',
    },
    {
    id: 2,
    name: 'Batman',
    superPower: 'Bat skills',
    address: '108 Gotham Avenue',
    },
    {
    id: 3,
    name: 'Spiderman',
    superPower: 'Spider skills',
    address: '24 110th Street',
    },
    {
    id: 4,
    name: 'Aquaman',
    superPower: 'Underwater breathing',
    address: '00 Ocean Drive',
    },
    {
    id: 5,
    name: 'Catwoman',
    superPower: 'Extreme jumping skills',
    address: '55 Gotham Avenue',
    },
  ];

  getAll(): Hero[] {
    return this.dataList;
  }

  constructor() { }
}
