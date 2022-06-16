export function convertUTCDateToLocalDate(date) {
    console.log(date);
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
}

export function convertLocalDateToUTCDate(date) {
    date.setUTCFullYear(date.getFullYear())
    date.setUTCMonth(date.getMonth())
    date.setUTCDate(date.getDate())
    date.setUTCHours(date.getHours());
    date.setUTCMinutes(date.getMinutes());
    return date;
}
