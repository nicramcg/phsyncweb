import {LayoutModule} from '@angular/cdk/layout';
import {OverlayModule} from '@angular/cdk/overlay';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthService} from './shared/services/auth-service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {CurrentUserService} from './services/current-user-service';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {AdminGuard} from './shared/guard/admin.guard';
import {FlexModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {StatModule} from './shared/modules/stat/stat.module';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CurrentPageService} from './services/current-page.service';
import {DatePipe, registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localePl from '@angular/common/locales/pl';
import localePlExtra from '@angular/common/locales/extra/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import localeDe from '@angular/common/locales/de';
import localeFr from '@angular/common/locales/fr';
import localeDeAt from '@angular/common/locales/de-AT';

import localeFrExtra from '@angular/common/locales/extra/fr';
import {MatRadioModule} from '@angular/material/radio';
import {PaginatorHandlerService} from './services/paginator-handler.service';
import {AppUserService} from './services/app-user.service';
import {DownloaderService} from './services/downloader-service';
import {FormatDateService} from "./services/format-date-service";
import {MatPaginatorI18nService} from "./services/MatPaginatorI18nService";
import {CurrencyMaskService} from "./currency-mask.service";
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from "@angular/material-moment-adapter";
import {ConfirmOperationNgComponent} from "./layout/dialogs/confirm-operation-ng/confirm-operation-ng.component";
import {MessageDialogNgComponent} from "./layout/dialogs/message-dialog-ng/message-dialog-ng.component";
import {NgIdleKeepaliveModule} from "@ng-idle/keepalive";
import {MatTabsModule} from "@angular/material/tabs";
import {TranslationLoader} from "./services/translation-loader";
import {FileUploadService} from "./services/file-upload-service";
import {FilesListService} from "./services/files-list-service";
// import {SafeHtmlPipe} from "./safe-html-pipe";

registerLocaleData(localeEn, 'en');
registerLocaleData(localeDeAt, 'de-at');
registerLocaleData(localePl, 'pl', localePlExtra);
registerLocaleData(localeDe, 'de', localeDeExtra);
registerLocaleData(localeFr, 'fr', localeFrExtra);
registerLocaleData(localeFr, 'fr', localeFrExtra);


// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-javascript/sb-admin-material/master/dist/assets/i18n/',
        '.json'
    );*/
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslationLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        // CurrencyMaskDirective
        // SafeHtmlPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        OverlayModule,
        HttpClientModule,
        NgIdleKeepaliveModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        // TranslateModule.forRoot({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: (HttpLoaderFactory),
        //         deps: [HttpClient]
        //     }
        // }),
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        // MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDialogModule,
        MatNativeDateModule,
        FlexModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        MatTooltipModule,
        StatModule,
        MatSelectModule,
        MatDatepickerModule,
        MatRadioModule, MatTabsModule],
    providers: [AuthService,
        {provide: MAT_DATE_LOCALE, useValue: 'de-AT'},
        {provide: DateAdapter, useClass: MomentDateAdapter}, // should be fine now
        {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}, //should be fine now
        // VamedAppGuard,
        AdminGuard,
        FileUploadService,
        CurrentUserService,
        MatSnackBar,
        CurrentPageService,
        PaginatorHandlerService,
        AppUserService,
        DownloaderService,
        FormatDateService,
        {
            provide: MatPaginatorIntl,
            useClass: MatPaginatorI18nService,
        },
        CurrencyMaskService,
        DatePipe,
        FilesListService
    ],
    entryComponents: [ConfirmOperationNgComponent, MessageDialogNgComponent],
    exports: [
        // SafeHtmlPipe
    ],
    bootstrap: [AppComponent]

})
export class AppModule {
    constructor(private translate: TranslateService) {
        translate.addLangs(['en', 'pl', 'de']);
        translate.setDefaultLang('de');
        translate.use('de');
    }
}
