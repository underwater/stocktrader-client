import { DashboardComponent } from './dashboard/dashboard.component';
import { PositionSummaryComponent } from './positionsummary/positionsummary.component';
import { OrderBlotterComponent } from './orderblotter/orderblotter.component';
import { PriceBoardComponent } from './priceboard/priceboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full'  },
  { path: 'priceboard', component: PriceBoardComponent },
  { path: 'orderblotter', component: OrderBlotterComponent },
  { path: 'positionsummary', component: PositionSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
