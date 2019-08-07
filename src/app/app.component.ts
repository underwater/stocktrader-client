/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { PricingViewModel } from './view-models/pricing.view-model';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private _pricingVm: PricingViewModel) {
  }

  async ngOnInit() {
    // await this._pricingVm.init();
    this.analytics.trackPageViews();
  }
}
