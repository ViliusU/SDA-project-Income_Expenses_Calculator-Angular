import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'familyMembers',
        loadChildren:() => import('./family-members/family-members.module').then(m => m.FamilyMembersModule)
      },
      {
        path:'transactions',
        loadChildren:() => import('./transactions/transactions.module').then(m => m.TransactionsModule)
      }
        ]
  }
  // {
  //   path:'statistics',
  //   component: StatisticsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
