

//date format with default date
function formatDate(dateobject) {
    let dates = {
        year: dateobject.getFullYear(),
        month: dateobject.getMonth() + 1,
        date: dateobject.getDate(),
        hour: (dateobject.getHours() % 12) || 12,
        minute: dateobject.getMinutes().toString().padStart(2, "0"),
        amorpm: dateobject.getHours() < 12 ?
            "AM" : "PM"
    }

    return ` ${dates.year}/${dates.month}/${dates.date} ${dates.hour}:${dates.minute} ${dates.amorpm}`
}


let mydate = new Date();
let mydateformated = formatDate(mydate);
console.log(mydateformated);



//date format with my special date

function formatDate1(dateobject) {
    let part = {
        year: dateobject.getFullYear(),
        month: dateobject.getMonth() + 1,
        date: dateobject.getDate(),
        hour: (dateobject.getHours() % 12) || 12,
        minute: dateobject.getMinutes().toString().padStart(2, "0"),
        amorpm: dateobject.getHours() < 12 ?
            "AM" : "PM"
    }

    return ` ${part.year}/${part.month}/${part.date} ${part.hour}:${part.minute} ${part.amorpm}`
}


let mydate1 = new Date(2000, 12, 1, 23, 4);
let mydateformated1 = formatDate1(mydate1);
console.log(mydateformated1);



//day.js with default date

const mydate2 = dayjs();
console.log(mydate2.format(" YYYY/M/D h:mm A"));


//day.js with my special date
const mydate3 = dayjs("1990-7-20 18:4");
console.log(mydate3.format(" YYYY/M/D h:mm A"));