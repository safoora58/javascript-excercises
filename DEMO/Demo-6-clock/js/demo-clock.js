
//analog clock

const sc = document.querySelector('#sc');
const min = document.querySelector('#min');
const hr = document.querySelector('#hr');


setInterval(() => {

    //  اول باید زمان سیستم را در بیارم و به مقدار ساعت - دقیقه و ثانیه دسترسی پیدا کنم

    const date = new Date();

    const hour = date.getHours();
    const minuts = date.getMinutes();
    const seconds = date.getSeconds();


    // حالا باید زاویه بندی ها را انجام بدم تا ساعت ما به حالت آنالوگ در بیاد

    const seconddegree = seconds * 6;   //360 /60 =6
    const minutsdegree = minuts * 6;     //360 /60 =6
    const hourdegree = (hour * 30) + ((minuts / 60) * 30);       // 360/12 =30   


    // باید در فضای سه بعدی زوایای محاسبه شده بدرستی کار کنند و بچرخند
    sc.style.transform = `rotateZ(${seconddegree}deg)`;
    min.style.transform = `rotateZ(${minutsdegree}deg)`;
    hr.style.transform = `rotateZ(${hourdegree}deg)`;
}, 1000);







//digital clock

// باید دسترسی پیدا کنم به اعداد ساعت و دقیقه و ثانیه
const secondnum = document.querySelector('#second-num');
const minutenum = document.querySelector('#minute-num');
const hournum = document.querySelector('#hour-num');
const meridiem = document.querySelector('#ampm');

//باید دسترسی پیدا کنم به strokes
const svgs = document.querySelector('#svg-s');
const svgm = document.querySelector('#svg-m');
const svgh = document.querySelector('#svg-h');

// الان باید دسترسی پیدا کنم به spots 
const spotsecond = document.querySelector('.spot-second');
const spotminute = document.querySelector('.spot-minute');
const spothour = document.querySelector('.spot-hour');



setInterval(() => {

    // باید زمان سیستم را در بیارم
    const datedigital = new Date();

    let h = datedigital.getHours();
    let m = datedigital.getMinutes();
    let s = datedigital.getSeconds();

    let ampm;
    if (h > 12) {
        ampm = "PM";
    }
    else {
        ampm = "AM";
    }

    // باید 24 ساعت شبانه روز را تبدیل کنم به دوتا 12 ساعت 
    if (h >= 12) {
        h =h- 12;
    } else {
        h = h;
    }


    //حالا باید قبل از اعداد تک رقمی صفر قرار بگیره برای شکیل تر شدن و واقعی تر شدن ساعت -     روش اول

    if (s < 10) {
        s = "0" + s;
        }
    else{
        s = s;
    }

    if (m < 10) {
        m = "0" + m;
        }
    else{
        m = m;
    }

    if (h < 10) {
        h = "0" + h;
        }
    else{
        h = h;
    }


    // // الان باید محتوای ساعت و دقیقه و ثانیه مشخص شود -    روش اول
    secondnum.innerHTML = s;
    minutenum.innerHTML = m;
    hournum.innerHTML = h;
    meridiem.innerHTML = ampm;

    // الان باید محتوای ساعت و دقیقه و ثانیه مشخص شود و صفر قبل از تک رقمی بیاید -    روش دوم
    // secondnum.innerHTML= s.toString().padStart(2,"0") ; 
    // minutenum.innerHTML=m.toString().padStart(2,"0"); 
    // hournum.innerHTML=h.toString().padStart(2,"0"); 
    // meridiem.innerHTML = ampm;


    // حالا باید به بردر ها استایل بدهم برای چرخیدن - strokes
    svgh.style.strokeDashoffset = 255 - (255 * h) / 12;
    svgm.style.strokeDashoffset = 255 - (255 * m) / 60;
    svgs.style.strokeDashoffset = 255 - (255 * s) / 60;

    // حالا باید به اسپات ها استایل بدهم برای چرخیدن  - spots 
    spotsecond.style.transform = `rotate(${s * 6}deg)`;
    spotminute.style.transform = `rotate(${m * 6}deg)`;
    spothour.style.transform = `rotate(${h * 30}deg)`;

}, 1000);




//date 

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const daynumber = document.querySelector('#day-number');
const dayname = document.querySelector('#day-name');
const daynameweek = document.querySelector('.day-name');
const yearnum = document.querySelector('#year');
const monthnum = document.querySelector('#month-num');
const monthname = document.querySelector('.month-name');

const dateTime = new Date();

let day = dateTime.getDate();
let dayweek = dateTime.getDay();
let year = dateTime.getFullYear();
let nummonth = dateTime.getMonth();
let namemonth = month[dateTime.getMonth()];
let namedayweek = weekday[dateTime.getDay()];


daynumber.innerHTML = day;
dayname.innerHTML = dayweek;
yearnum.innerHTML = year;
// monthnum.innerHTML= nummonth;
monthname.innerHTML = namemonth;
daynameweek.innerHTML = namedayweek;
