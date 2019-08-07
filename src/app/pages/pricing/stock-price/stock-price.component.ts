import { Component, OnInit, Input } from '@angular/core';
import { Price } from '../../../models/price.model';

@Component({
    selector: 'stock-price',
    templateUrl: 'stock-price.component.html'
})
export class StockPriceComponent implements OnInit {
    @Input()
    price: Price;

    constructor() { }

    ngOnInit() { }
}
