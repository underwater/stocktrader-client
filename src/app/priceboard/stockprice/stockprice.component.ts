import { Component, OnInit, Input } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'stockprice',
  templateUrl: './stockprice.component.html'
})
export class StockPriceComponent implements OnInit {

  @Input()
  stock: Stock;
  constructor() { }

  ngOnInit() {
  }

}
