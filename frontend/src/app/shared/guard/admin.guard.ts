import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Authority} from '../Authority';
import {AuthorityUtils} from '../authority-utils';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        if (sessionStorage.getItem('currentUser') && (
            AuthorityUtils.hasAuthority(Authority.ADMIN, currentUser)
        )) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
