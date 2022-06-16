import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen1Component } from './screen1.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Screen1RoutingModule } from './screen1-routing.module';
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [Screen1Component],
    imports: [
        CommonModule,
        Screen1RoutingModule,
        FlexLayoutModule.withConfig({addFlexToParent: false}),
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [
        MatDatepickerModule
    ]
})
export class Screen1Module { }
