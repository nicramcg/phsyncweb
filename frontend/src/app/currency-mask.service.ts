import {Injectable} from '@angular/core';

const padding = "000000000";

@Injectable()
export class CurrencyMaskService {
  private prefix: string;
  private thousandsSeparator: string = ".";
  private decimalSeparator: string = ',';

  constructor() {
    this.prefix = '';
    this.thousandsSeparator = '.';
    this.decimalSeparator = ','
  }

  transform(value: string, allowNegative = false,  fractionSize: number) {

    if(value && !this.isValueParsedForTheFirstTime(value)){
      value = value.replace(/[.]/g, "");
    }


    if (value == undefined || value === '') {
      return null;
    }
    if (allowNegative) {
      value = value.toString();
      if (value.startsWith('(') || value.startsWith('-')) {
        value = '-' + value.substr(1, value.length).replace(/\(|\)|\$|\-/g, '');
      } else {
        value = value.replace(/\(|\)|\$|\-/g, '');
      }
    } else {
        value = value.toString();
        value = value.replace(/\(|\)|\$|\-/g, '');
    }
    value = value.toString().replace('.', ',');

    let [integer, fraction = ''] = (value || '').toString().split(this.decimalSeparator);

    fraction = fractionSize > 0
      ? this.decimalSeparator + (fraction + padding).substring(0, fractionSize) : "";

    // If user types .xx we can display 0.xx
    if (integer === '') {
      integer = '0.00';
    } else if (integer.startsWith('$')) {
      // If there are multiple transforms, remove the previous dollar sign (blur and change at the same time)
      integer = integer.substr(1, integer.length);
    } else if (allowNegative && integer.startsWith('-')) {
      // If user inputs negative number set to paranthesis format
      integer = integer.substr(1, integer.length);
      // return '(' + this.prefix + integer + fraction + ')';
      return '-' + this.prefix + integer + fraction;

    }


    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);

    let result = integer + fraction;


    return this.prefix + integer + fraction;
  }


  isValueParsedForTheFirstTime(value){
    value = value.toString();
    return !(value.indexOf('.') !== -1 && value.indexOf(",") !== -1);
  }

  // transform(value: string, allowNegative = false,  fractionSize: number) {
  //   if (value == undefined || value === '') {
  //     return null;
  //   }
  //   if (allowNegative) {
  //     value = value.toString();
  //     if (value.startsWith('(') || value.startsWith('-')) {
  //       value = '-' + value.substr(1, value.length).replace(/\(|\)|\$|\-/g, '');
  //     } else {
  //       value = value.replace(/\(|\)|\$|\-/g, '');
  //     }
  //   }
  //   value = value.toString().replace('.', ',');
  //   let [integer, fraction = ''] = (value || '').toString().split(this.decimalSeparator);
  //   fraction = fractionSize > 0
  //     ? this.decimalSeparator + (fraction + padding).substring(0, fractionSize) : "";
  //   // If user types .xx we can display 0.xx
  //   if (integer === '') {
  //     integer = '0.00';
  //   } else if (integer.startsWith('$')) {
  //     // If there are multiple transforms, remove the previous dollar sign (blur and change at the same time)
  //     integer = integer.substr(1, integer.length);
  //   } else if (allowNegative && integer.startsWith('-')) {
  //     // If user inputs negative number set to paranthesis format
  //     integer = integer.substr(1, integer.length);
  //     return '(' + this.prefix + integer + fraction + ')';
  //   }
  //   return this.prefix + integer + fraction;
  // }

  parse(value: string, allowNegative = false,  fractionSize: number): number {
    let [integer, fraction = ''] = (value || '').split(this.decimalSeparator);
    integer = integer.replace(this.thousandsSeparator,  "");



    fraction = parseInt(fraction, 10) > 0 && 2 > 0 ? this.decimalSeparator + (fraction + padding).substring(0, 2) : '';


    // let nValue = (integer + fraction).replace(",", ".").toString();
    integer = integer.replace(/[.]/g, "");

    let nValue = (integer + "." + fraction.replace(",", "")).toString();

    if (nValue && nValue === '.') {
      return null;
    }

    if (allowNegative && value.startsWith('-')) {
      // if (allowNegative && value.startsWith('(') && value.endsWith(')')) {
      // return parseFloat(nValue);
      // console.log(nValue + ' nv');
      // return (-1 * parseFloat(nValue));
      let parsed = parseFloat(nValue);
      if (isNaN(parsed)) {
        return null;
      }
      return parsed;
      // return parseFloat(nValue);
    } else {
      let parsed = Number(nValue);
      if (isNaN(parsed)) {
        return null;
      }
      return parsed;
      // return Number(nValue);
    }
    // if (allowNegative && value.startsWith('(') && value.endsWith(')')) {
    //   return (-1 * parseFloat(nValue));
    // } else {
    //   return Number(nValue);
    // }
  }
}
