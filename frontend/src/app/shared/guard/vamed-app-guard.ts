// import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
// import {AuthorityUtils} from '../authority-utils';
// import {Authority} from '../Authority';
// import {Injectable} from '@angular/core';
//
// @Injectable()
// export class VamedAppGuard implements CanActivate {
//     constructor(private router: Router) { }
//
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
//         if (sessionStorage.getItem('currentUser') && (
//             AuthorityUtils.hasAuthority(Authority.ADMIN, currentUser)
//             || AuthorityUtils.hasAuthority(Authority.USER, currentUser)
//             || AuthorityUtils.hasAuthority(Authority.ACCOUNTING_DEPARTMENT, currentUser)
//             || AuthorityUtils.hasAuthority(Authority.INVOICE_VERIFICATION_DEPARTMENT, currentUser)
//         )) {
//             return true;
//         }
//         // not logged in so redirect to login page with the return url
//         this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
//         return false;
//     }
// }
