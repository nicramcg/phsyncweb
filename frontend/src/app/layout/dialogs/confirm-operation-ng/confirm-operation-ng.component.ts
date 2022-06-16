import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-confirm-operation-ng',
  templateUrl: './confirm-operation-ng.component.html',
  styleUrls: ['./confirm-operation-ng.component.scss']
})
export class ConfirmOperationNgComponent implements OnInit {
    @Input() question;
    @Input() useTranslation = true;

    constructor(public activeModal: NgbActiveModal) { }

    ngOnInit(): void {
    }

}
