import { DashboardComponent } from './dashboard/dashboard.component';
import { PositionsummaryComponent } from './positionsummary/positionsummary.component';
import { OrderblotterComponent } from './orderblotter/orderblotter.component';
import { PriceboardComponent } from './priceboard/priceboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full'  },
  { path: 'priceboard', component: PriceboardComponent },
  { path: 'orderblotter', component: OrderblotterComponent },
  { path: 'positionsummary', component: PositionsummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
