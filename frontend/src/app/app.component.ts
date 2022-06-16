import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DateAdapter} from "@angular/material/core";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {Keepalive} from "@ng-idle/keepalive";
import {DEFAULT_INTERRUPTSOURCES, Idle} from "@ng-idle/core";
import {AuthService} from "./shared/services/auth-service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    idleState = 'Not started.';
    timedOut = false;

    private destroy$: Subject<void> = new Subject();
    constructor(private router: Router,
                private translate: TranslateService,
                private _adapter: DateAdapter<any>,
                private idle: Idle,
                private keepalive: Keepalive,
                private authService: AuthService) {
        idle.setIdle(7200);
        idle.setTimeout(180); //3 minutes
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        idle.onIdleEnd.subscribe(() => {
            this.idleState = 'No longer idle.'
        });
        idle.onTimeout.subscribe(() => {
            this.idleState = 'Timed out!';
            this.timedOut = true;
            this.logOut();
        });
        idle.onIdleStart.subscribe(() => {
            this.idleState = 'You\'ve gone idle!';
        });
        idle.onTimeoutWarning.subscribe((countdown) => {
            this.idleState = 'You will time out in ' + countdown + ' seconds!';
        });
        keepalive.interval(20);
        keepalive.request("/api/alive/keep");
        // keepalive.onPing.subscribe(() => this.lastPing = new Date());
        this.reset();
    }

    ngOnInit() {
        const lang = navigator.language || window.navigator.language;
        if (lang && (lang === 'de'
            || lang === 'de-DE'
            || lang === 'de-AT'
            || lang === 'de-LU'
            || lang ==='de-LI'
            || lang === 'gsw'
            || lang ==='wen-DE'
            || lang ==='de-CH')) {
            this.translate.setDefaultLang('de');
            this.translate.use('de');
        } else {
            this.translate.setDefaultLang('en');
            this.translate.use('en');
        }
        this.translate.onLangChange
            .pipe(takeUntil(this.destroy$))
            .subscribe(translate => {
                this._adapter.setLocale(translate.lang);
            })
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    logOut() {
        this.authService.logOut()
            .subscribe(data => {
                    sessionStorage.removeItem('currentUser');
                    this.router.navigate(['/login']);
                }, err => {
                    console.log('Error');
                }
            )
    }

    reset() {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
    }
}
