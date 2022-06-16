import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {CurrentPageService} from '../../../services/current-page.service';
import {CurrentUserService} from '../../../services/current-user-service';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
    public pushRightClass: string;
    public currentPageName: string = '';
    userFromSession: any = null;

    constructor(public router: Router, private translate: TranslateService,
                private currentPageService: CurrentPageService,
                private currentUserService: CurrentUserService) {
        // this.currentPageName = this.currentPageService.getName();
        this.currentPageService.getName().subscribe(name => {
            this.currentPageName = name;
        });
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
        let currentAuthentication = this.currentUserService.getCurrentUserFromSession();
        if (currentAuthentication) {
            this.userFromSession = currentAuthentication.appUser;
        }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);

        console.log('test here');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        this.router.navigate(['/login']);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
