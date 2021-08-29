import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { RouterModule } from '@angular/router';
import { StatisticsRoutes } from './statistics.routes';



@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(StatisticsRoutes)
  ],
  exports: [StatisticsComponent]
})
export class StatisticsModule { }
