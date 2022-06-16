import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-message-dialog-ng',
  templateUrl: './message-dialog-ng.component.html',
  styleUrls: ['./message-dialog-ng.component.scss']
})
export class MessageDialogNgComponent implements OnInit {
    @Input() question;

    constructor(public activeModal: NgbActiveModal) { }

    ngOnInit(): void {
    }
}
