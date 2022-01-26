export function GetDate(assignDate) {
    let d = assignDate ? new Date(assignDate) : new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    hours = d.getHours().toString(),
    minutes = d.getMinutes().toString();
if (month.length < 2) 
    month = '0' + month;
if (day.length < 2) 
    day = '0' + day;
if (hours.length < 2) 
    hours = '0' + hours;
if (minutes.length < 2) 
    minutes = '0' + minutes;
return assignDate ? [year, month, day].join('-') + ' ' + hours + ':' + minutes : [year, month, day].join('-');
}