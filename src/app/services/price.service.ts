import { StockPrice } from './../models/stockprice';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';

// this is a wrapper around the  RxJS built in WebSocketSubject object
@Injectable()
export class PriceService {
  private _wsSubject: WebSocketSubject<any>;

  private get wsSubject(): WebSocketSubject<any> {
    const closed = !this._wsSubject || this._wsSubject.closed;
    if (closed) {
      this._wsSubject = webSocket(this.wsUrl);
    }
    return this._wsSubject;
  }
    // hard coded url to point to nodejs / websocket service for the time being
  private readonly wsUrl: string = 'ws://localhost:8181';

  constructor() {}

  get priceUpdates$(): Observable<Array<StockPrice>> {

    return this.wsSubject.asObservable();
  }
}
