import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {TranslateModule} from '@ngx-translate/core';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {TopnavComponent} from './components/topnav/topnav.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {NavComponent} from './nav/nav.component';
import {Screen2Component} from './screen2/screen2.component';
import {MatCardModule} from '@angular/material/card';
import {StatModule} from '../shared/modules/stat/stat.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {OrderModule} from 'ngx-order-pipe';
import {NgxTrimDirectiveModule} from 'ngx-trim-directive';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
// import {AddCaseComponent} from './add-challenge/add-case.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ConfirmOperationComponent} from './dialogs/confirm-operation/confirm-operation.component';
import {SafeHtmlPipe} from './safe-html-pipe';
import {ImageCropperModule} from 'ngx-image-cropper';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {TopNavNewComponent} from './components/top-nav-new/top-nav-new.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {NgOptionHighlightModule} from "@ng-select/ng-option-highlight";
import {MtxSelectModule} from "@ng-matero/extensions";
import {CurrencyMaskDirective} from "../currency-mask.directive";
import {MatChipsModule} from "@angular/material/chips";
import {SidebarModule} from "ng-sidebar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MessageDialogComponent} from './dialogs/message-dialog/message-dialog.component';
import {ConfirmOperationNgComponent} from './dialogs/confirm-operation-ng/confirm-operation-ng.component';
import {MessageDialogNgComponent} from './dialogs/message-dialog-ng/message-dialog-ng.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import {NgbAlertModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {ContextMenuModule} from "ngx-contextmenu";
import {MatTabsModule} from "@angular/material/tabs";
import {NgbdSortableHeader} from "../sortable.directive";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {ArraySortTranslatedPipe} from "./array-sort-translated-pipe";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FilterPipe} from "./filter-pipe";
import {CdkDetailRowDirective} from "./cdk-detail-row.directive";
import {NgxMatColorPickerModule} from "@angular-material-components/color-picker";
import {ColorPickerModule} from "ngx-color-picker";
import {HomeComponent} from './home/home.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule,
        MatCardModule,
        StatModule,
        MatTableModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        FlexModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatSortModule,
        FormsModule,
        MatGridListModule,
        MatDatepickerModule,
        MatSelectModule,
        NgxSpinnerModule,
        MatExpansionModule,
        OrderModule,
        NgxTrimDirectiveModule,
        MatDialogModule,
        MatBadgeModule,
        NgxPaginationModule,
        ImageCropperModule,
        DragDropModule,
        NgSelectModule,
        NgOptionHighlightModule,
        MtxSelectModule,
        MatChipsModule,
        SidebarModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        NgxMatSelectSearchModule,
        NgbTooltipModule,
        NgbAlertModule,
        ContextMenuModule.forRoot({useBootstrap4: true}),
        MatTabsModule,
        ScrollingModule,
        MatSlideToggleModule,
        NgxMatColorPickerModule,
        ColorPickerModule,
    ],
    exports: [],
    declarations: [
        Screen2Component,
        LayoutComponent,
        NavComponent,
        TopnavComponent,
        SidebarComponent,
        ConfirmOperationComponent,
        SafeHtmlPipe,
        TopNavNewComponent,
        CurrencyMaskDirective,
        MessageDialogComponent,
        ConfirmOperationNgComponent,
        MessageDialogNgComponent,
        NgbdSortableHeader,
        CdkDetailRowDirective,
        ArraySortTranslatedPipe,
        FilterPipe,
        HomeComponent,
    ],
    entryComponents: []

})
export class LayoutModule {
}
