import { Injectable } from '@angular/core';
import { PricingService } from '../services/pricing.service';
import { Price } from '../models/price.model';

@Injectable()
export class PricingViewModel {
    public stocks: string[] = [
        "MSFT", "AAPL", "AMZN", "FB", "GOOG"
    ];

    prices: Price[] = [];

    constructor(private _pricingService: PricingService) { }

    async init() {
        await this.refresh();
    }

    async refresh() {
        this.prices = [];
        for(let stock of this.stocks) {
            this.prices.push(await this._pricingService.getStockPrice(stock));
        }
    }
}
