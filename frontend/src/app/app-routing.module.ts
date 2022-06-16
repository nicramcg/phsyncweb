import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/guard/auth.guard';
import {LayoutModule} from "./layout/layout.module";
import {LoginModule} from "./login/login.module";

const routes: Routes = [
    // {
    //     path: '',
    //     loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
    //     canActivate: [AuthGuard]
    // },
    // {
    //     path: 'login',
    //     loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    // }
    {
        path: '',
        loadChildren: () => LayoutModule,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => LoginModule
    }
];

@NgModule({
    // imports: [RouterModule.forRoot(routes)],
    imports: [RouterModule.forRoot(routes, {useHash: false })],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
