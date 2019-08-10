import { Injectable } from '@angular/core';
import { PricingService } from '../services/pricing.service';
import { Price } from '../models/price.model';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';

@Injectable()
export class PricingViewModel {

    private _initialized: boolean = false;
    private _socket: any;
    private _live: boolean = false;

    get live(): boolean {
        return this._live;
    }

    set live(value: boolean) {
        this._live = value;
        this.liveModeChanged();
    }

    get initialized(): boolean {
        return this._initialized;
    }

    public stocks: string[] = [];

    prices: Price[] = [];

    constructor(private _pricingService: PricingService) { }

    async init(stocks: string[]) {
        this._socket = await this._pricingService.openPricingSocket();
        await this.refresh(stocks);
        this._initialized = true;
    }

    async refresh(stocks: string[]) {
        this.prices = [];
        this.stocks = stocks;
        for(let stock of this.stocks) {
            this.prices.push(await this._pricingService.getStockPrice(stock));
        }
    }

    // [{name: '', price: }, {name: '', price: }]
    private onStockPricesChanged(message) {
        this.prices = message;
    }

    private liveModeChanged() {
        if (this.live) {
            this._socket.on(environment.events.stockPricesChanged, this.onStockPricesChanged.bind(this));
            this._socket.emit(environment.events.startPriceWatch, JSON.stringify({
                stocks: this.stocks
            }));
        }
        else {
            this._socket.emit(environment.events.stopPriceWatch);
        }
    }
}
