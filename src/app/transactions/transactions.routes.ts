import { Routes } from "@angular/router";
import { TransactionAddComponent } from "./transaction-add/transaction-add.component";
import { TransactionComponent } from "./transaction/transaction.component";
import { TransactionsListComponent } from "./transactions-list/transactions-list.component";
import { TransactionsComponent } from "./transactions.component";
import { TransactionsPaths } from "./transactions.paths.const";

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
            },
            {
                path:
                TransactionsPaths.transaction.path
                // 'transaction/:id'
                ,
                component: TransactionComponent
            },
            {
                path: 'add',
                component: TransactionAddComponent
                
            }
        ]
    }
]