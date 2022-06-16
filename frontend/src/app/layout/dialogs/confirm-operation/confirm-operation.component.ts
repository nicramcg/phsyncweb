import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-confirm-operation',
    templateUrl: './confirm-operation.component.html',
    styleUrls: ['./confirm-operation.component.scss']
})
export class ConfirmOperationComponent implements OnInit {
    private readonly _matDialogRef: MatDialogRef<ConfirmOperationComponent>;
    private readonly triggerElementRef: ElementRef;
    message: string = 'Are you sure?';
    confirmButtonText = 'YES';
    cancelButtonText = 'NO';

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<ConfirmOperationComponent>) {
        if (data) {
            this._matDialogRef = dialogRef;
            this.triggerElementRef = data.trigger;
            this.message = data.message || this.message;
            if (data.buttonText) {
                this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
                this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
            }
        }
    }

    ngOnInit(): void {
        const matDialogConfig: MatDialogConfig = new MatDialogConfig();
        if (this.triggerElementRef) {
            const rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
            matDialogConfig.position = {left: `${rect.left}px`, top: `${rect.bottom - 50}px`};
            matDialogConfig.width = '300px';
            matDialogConfig.height = '400px';
            this._matDialogRef.updateSize(matDialogConfig.width, matDialogConfig.height);
            this._matDialogRef.updatePosition(matDialogConfig.position);
        }
    }

    onConfirmClick(): void {
        this.dialogRef.close(true);
    }

    cancel(): void {
        this._matDialogRef.close(null);
    }
}
