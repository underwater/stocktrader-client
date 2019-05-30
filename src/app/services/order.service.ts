import { Injectable, OnInit } from '@angular/core';
import { Order } from '../models/order';


@Injectable()
export class OrderService  {

  getOrders(): Array<Order> {
    const result  = new Array<Order>();
    result.push(
      { symbol: 'IBM',
        shares: 100,
        price: 120,
        type: 'BUY',
        status: 'pending',
        value: 0
      },
      { symbol: 'MSFT', shares: 500,
      price: 32,
      type: 'SELL',
      status: 'completed',
      value: 0
    });

    return result;
  }
}
