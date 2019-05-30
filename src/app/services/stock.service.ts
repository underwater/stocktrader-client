import { Stock } from './../models/stock';
import { Injectable } from '@angular/core';

@Injectable()
export class StockService {
  constructor() {}

  getAll(): Array<Stock> {
    const result = new Array<Stock>();
    result.push(
      { symbol: 'IBM', description: 'International Business Machines' },
      { symbol: 'APPL', description: 'Apple Inc.' },
      { symbol: 'GOOG', description: 'Google' },
      { symbol: 'MSFT', description: 'Microsoft' }
    );
    return result;
  }
}
