import { PriceService } from './services/price.service';
import { OrderService } from './services/order.service';
import { StockService } from './services/stock.service';
import { StockpriceComponent } from './priceboard/stockprice/stockprice.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceboardComponent } from './priceboard/priceboard.component';
import { OrderblotterComponent } from './orderblotter/orderblotter.component';
import { PositionsummaryComponent } from './positionsummary/positionsummary.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
   declarations: [
      AppComponent,
      PriceboardComponent,
      OrderblotterComponent,
      PositionsummaryComponent,
      StockpriceComponent,
      DashboardComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [
      StockService,
      OrderService,
      PriceService
   ],
   bootstrap: [
     AppComponent
    ]
})
export class AppModule { }
