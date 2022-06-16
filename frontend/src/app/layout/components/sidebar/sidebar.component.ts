import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from '../../../services/current-user-service';
import {AuthorityUtils} from '../../../shared/authority-utils';
import {Authority} from '../../../shared/Authority';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    currentAuthentication: any;
    public showAdminMenuOpts: boolean;
    public displayAdminMenu = false;
    public showMenu: string;

    constructor(private currentUserService: CurrentUserService) {
    }

    ngOnInit() {
        this.showAdminMenuOpts = false;
        this.currentAuthentication = this.currentUserService.getCurrentUserFromSession();
        this.configureAccessToMenu();
    }

    toggleAdminMenu() {
        this.showAdminMenuOpts = !this.showAdminMenuOpts;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    configureAccessToMenu() {
        if (AuthorityUtils.hasAuthority(Authority.ADMIN, this.currentAuthentication)) {
            this.displayAdminMenu = true;
        }
    }
}
