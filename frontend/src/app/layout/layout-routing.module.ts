import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from './layout.component';
import {HomeComponent} from "./home/home.component";
// import {AddCaseComponent} from './add-challenge/add-case.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'cases',
                // canActivate: [AuthGuard]
            },
            // {
            //     path: 'dashboard',
            //     loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            // },
            // {
            //     path: 'screen1',
            //     loadChildren: () => import('./screen1/screen1.module').then(m => m.Screen1Module)
            // },
            // {
            //     path: 'screen2',
            //     component: Screen2Component,
            //     canActivate: [AuthGuard]
            // },
            {
                path: 'home',
                component: HomeComponent,
                // canActivate: [AuthGuard]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
