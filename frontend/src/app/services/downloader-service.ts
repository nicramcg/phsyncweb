import {Injectable} from "@angular/core";

@Injectable()
export class DownloaderService {
    downloadFile(typeOfFile: string, nameOfFile: string, response) {
        let ieEDGE = navigator.userAgent.match(/Edge/g);
        let ie = navigator.userAgent.match(/.NET/g); // IE 11+
        let oldIE = navigator.userAgent.match(/MSIE/g);

        let blob = new Blob([response], {type: typeOfFile});
        let fileName: string = nameOfFile;

        if (ie || oldIE || ieEDGE) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            let link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            //BUG FIX FOR FIREFOX 67, 68
            // link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
            document.body.appendChild(link);
            link.click();
            link.remove();
        }
    }

    openPdfFileInBrowser(fileName: string, response) {
        let ieEDGE = navigator.userAgent.match(/Edge/g);
        let ie = navigator.userAgent.match(/.NET/g); // IE 11+
        let oldIE = navigator.userAgent.match(/MSIE/g);

        const mimeTypeOfFile = this.getMimeTypeOfFile(fileName);
        let blob = new Blob([response], {type: mimeTypeOfFile});
        if (ie || oldIE || ieEDGE) {
            // window.navigator.msSaveBlob(blob, fileName);
            // navigator.msSaveOrOpenBlob(file, fileName);
            window.navigator.msSaveOrOpenBlob(blob, fileName);
        } else {
            const fileURL = URL.createObjectURL(blob);
            window.open(fileURL, '_blank');
        }
    }

    getMimeTypeOfFile(filename: string): string {
        const source = this.getExtensionFromFile(filename);
        if (source === 'pdf' || source === 'PDF') {
            return "application/pdf"
        } else if (source === 'jpeg' || source == 'JPEG') {
            return 'image/jpeg';
        } else if (source === 'jpg' || source === 'JPG') {
            return 'image/jpg';
        } else if (source === 'png' || source === 'PNG') {
            return 'image/png';
        } else if (source === 'xlsx' || source === 'XLSX') {
            return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        } else if (source === 'docx' || source === 'DOCX') {
            return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        } else if (source === 'doc' || source === 'DOC') {
            return 'application/msword';
        } else if (source === 'xls' || source === 'XLS') {
            return 'application/vnd.ms-excel';
        } else if (source === 'zip' || source === 'ZIP') {
            return 'application/zip';
        } else {
            return '';
        }
    }

    getExtensionFromFile(fileName: string) {
        if (fileName) {
            return fileName.substr(fileName.lastIndexOf('.') + 1);
        }
        return '';
    }
}
