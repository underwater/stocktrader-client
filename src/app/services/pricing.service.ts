import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Price } from '../models/price.model';

@Injectable()
export class PricingService {

    endpoint: string;

    constructor(private _http: HttpClient) {
        this.endpoint = `${environment.serverRoot}/${environment.endpoints.pricing}/`;
    }

    private getEndpoint(stock): string {
        return `${this.endpoint}${stock}`;
    }

    getStockPrice(stock: string): Promise<Price> {
        return this._http.get<Price>(this.getEndpoint(stock)).toPromise();
    }
}
