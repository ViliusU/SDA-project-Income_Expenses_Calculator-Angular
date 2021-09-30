import { Routes } from "@angular/router";
import { TransactionAddComponent } from "./transaction-add/transaction-add.component";
import { TransactionEditComponent } from "./transaction-edit/transaction-edit.component";
import { TransactionListComponent } from "./transaction-list/transaction-list.component";
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
                component: TransactionListComponent
            },
            {
                path:
                // TransactionsPaths.transaction.path
                'transaction/:id'
                ,
                component: TransactionEditComponent
            },
            {
                path: 'add',
                component: TransactionAddComponent
                
            }
        ]
    }
]