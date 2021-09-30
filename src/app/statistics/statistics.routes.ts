import { Routes } from "@angular/router";
import { StatisticsComponent } from "./statistics.component";

export const StatisticsRoutes: Routes = [
    {
        path:'',
        component: StatisticsComponent,
        children:[
            {
                path:'',
                pathMatch: 'full',
                redirectTo: '1'
            }
        ]

    }
]