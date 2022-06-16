import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {CurrentUserService} from "../../../services/current-user-service";
import {AuthService} from "../../../shared/services/auth-service";

@Component({
    selector: 'app-top-nav-new',
    templateUrl: './top-nav-new.component.html',
    styleUrls: ['./top-nav-new.component.scss']
})
export class TopNavNewComponent implements OnInit {
    userFromSession: any = null;
    hasAdminGroup = false;
    constructor(private translate: TranslateService,
                private router: Router,
                private currentUserService: CurrentUserService,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        let currentAuthentication = this.currentUserService.getCurrentUserFromSession();
        if (currentAuthentication) {
            this.userFromSession = currentAuthentication;
            // if (this.userFromSession) {
            //     this.hasAdminGroup = AuthorityUtils.hasAuthority(Authority.ADMIN, currentAuthentication);
            // }
        }


    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    goToCaseDataList() {
        this.router.navigate(['/home']);
    }

    onLoggedout() {
        this.authService.logOut()
            .subscribe(data => {
                localStorage.removeItem('isLoggedin');
                this.router.navigate(['/login']);
                }, err => {
                    console.log(err);
                    console.log('Error');
                }
            );
    }

    goTranslationsPage() {
        this.router.navigate(['/translations']);

    }

}
