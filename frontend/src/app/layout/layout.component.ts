import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    isExpanded = true;
    showSubmenu = false;
    isShowing = false;
    showSubSubMenu = false;

    constructor() {
    }

    ngOnInit() {
    }

    mouseenter() {
        if (!this.isExpanded) {
            this.isShowing = true;
        }
    }

    mouseleave() {
        if (!this.isExpanded) {
            this.isShowing = false;
        }
    }
}
