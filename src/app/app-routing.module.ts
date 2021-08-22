import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsModule } from './transactions/transactions.module';

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
        loadChildren:() => import('./transactions/transactions.module').then(m => TransactionsModule)
      }
        ]
  }



  // {
  //   path:'transactions',
  //   component: TransactionsComponent
  // }
  ,
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
