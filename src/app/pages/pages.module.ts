import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PricingComponent, LiveModePipe } from './pricing/pricing/pricing.component';
import { StockPriceComponent } from './pricing/stock-price/stock-price.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbCardModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    LiveModePipe,
    PricingComponent,
    StockPriceComponent
  ],
})
export class PagesModule {
}
