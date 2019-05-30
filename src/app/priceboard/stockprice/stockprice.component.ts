import { Component, OnInit, Input } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {

  @Input()
  stock: Stock;
  constructor() { }

  ngOnInit() {
  }

}
