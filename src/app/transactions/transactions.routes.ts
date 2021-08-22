import { Routes } from "@angular/router";
import { TransactionsListComponent } from "./transactions-list/transactions-list.component";
import { TransactionsComponent } from "./transactions.component";
import { TransactionsPaths } from "./transasctions.paths.const";

export const TransactionsRoutes: Routes = [
    {
        path: '',
        component: TransactionsComponent,
        children:[
            {
                path:'',
                pathMatch: 'full',
                redirectTo:
                TransactionsPaths.transactionsList.path
                // 'list'
            },
            {
                path: 
                TransactionsPaths.transactionsList.path
                // 'list'
                ,
                component: TransactionsListComponent
            }
        ]
    }
]