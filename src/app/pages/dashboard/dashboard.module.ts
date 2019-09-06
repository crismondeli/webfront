import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AnalitycComponent } from './analityc.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [DashboardComponent, AnalitycComponent, HistoryComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
