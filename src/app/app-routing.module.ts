import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyMembersComponent } from './family-members/family-members.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path:'family-members',
    component: FamilyMembersComponent
  },
  {
    path:'transactions',
    component: TransactionsComponent
  },
  {
    path:'statistics',
    component: StatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
