import { PriceService } from './../services/price.service';
import { StockService } from './../services/stock.service';
import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { StockPrice } from '../models/stockprice';

@Component({
  selector: 'priceboard',
  templateUrl: './priceboard.component.html'
})
export class PriceBoardComponent implements OnInit {
  stocks: Array<Stock> = new Array<Stock>();
    prices: Array<StockPrice> = new Array<StockPrice>();


  constructor(
    private stockService: StockService,
    private priceService: PriceService
  ) {}

  ngOnInit() {
    this.stocks = this.stockService.getAll();
    this.priceService.priceUpdates$.subscribe(data => {
      // no data seems to be received here !!!!
      this.prices = data;
    });
  }
}
