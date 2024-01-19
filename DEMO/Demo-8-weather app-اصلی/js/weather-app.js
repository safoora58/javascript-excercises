// clock
//  دسترسی به اعداد ساعت و دقیقه  
const hournum = document.querySelector('#hour-num');
const minutenum = document.querySelector('#minute-num');
const meridiem = document.querySelector('#ampm');

setInterval(() => {
  // باید زمان سیستم را در بیارم
  const datedigital = new Date();

  let h = datedigital.getHours();
  let m = datedigital.getMinutes();
  let ampm;
  if (h > 12) {
    ampm = "PM";
  }
  else {
    ampm = "AM";
  }
  // باید 24 ساعت شبانه روز را تبدیل کنم به دوتا 12 ساعت 
  if (h >= 12) {
    h = h - 12;
  } else {
    h = h;
  }
  //قرار دادن عدد صفر قبل از اعداد تک رقمی
  if (m < 10) {
    m = "0" + m;
  }
  else {
    m = m;
  }

  if (h < 10) {
    h = "0" + h;
  }
  else {
    h = h;
  }
  // الان باید محتوای ساعت و دقیقه مشخص شود      
  minutenum.innerHTML = m;
  hournum.innerHTML = h + ":";
  meridiem.innerHTML = ampm;

}, 1000);

//date 
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const yearnum = document.querySelector('#year');
const daynumber = document.querySelector('#day-number');
const dayname = document.querySelector('#weekday-name');
const daynameweek = document.querySelector('.weekday-name');
const monthnum = document.querySelector('#month-name');
const monthname = document.querySelector('.month-name');

const dateTime = new Date();

let year = dateTime.getFullYear();
let day = dateTime.getDate();
let dayweek = dateTime.getDay();
let namedayweek = weekday[dateTime.getDay()];
let namemonth = month[dateTime.getMonth()];
let nummonth = dateTime.getMonth();

yearnum.innerHTML = year;
daynumber.innerHTML = day + ",";
dayname.innerHTML = dayweek;
daynameweek.innerHTML = namedayweek + ",";
monthname.innerHTML = namemonth + ",";

// برای مشخص شدن روز یا شب 
function getDayOrNight() {
  let DayOrNight;
  let d = new Date();
  if (d.getDays() >= 6 && d.getDays() <= 19) {
    DayOrNight = 'Day';
  }
  DayOrNight = 'Night';
}

//function for displaying 5 recent cities
//search and show city
const citySearchBox = document.querySelector('#city-search-box');
const searchList = document.querySelector('.search-list');
const apikey = "9f655254782ec7e3e9d95e4b66ce920c";

let recentSearches = [];
//فچ کردن اطلاعات شهرها و اطمینان از صحت ای پی آی و بعد از اطمینان اجرای تایع   displayCityList
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchBox.value}&appid=${apikey}`;
  //console.log(citySearchBox.value);
  const res = await fetch(url);
  //console.log(res);
  const data = await res.json();
  console.log(data);
  //تعیین زمان محلی کشورها

  displayCityList(data);

  // Add the searched city to recentSearches array
  recentSearches.unshift(data);

  // Limit the recentSearches array to 5 elements
  if (recentSearches.length > 5) {
    recentSearches.pop();
  }

  // Display the recent searches
  displayRecentSearches(recentSearches);

}

//با کلیک کردن روی اینپوت این تابع اجرا شود 
function findCity() {
  let searchTerm = citySearchBox.value;
  if (searchTerm.length > 0) {
    searchList.classList.remove('hide-search-list');
    getWeather();
    // Display the recent searches
    displayRecentSearches(recentSearches);
  } else {
    searchList.classList.add('hide-search-list');
  }
}

function displayRecentSearches(recentSearches) {
  searchList.innerHTML = "";
  recentSearches.slice(0, 5).forEach(city => {
    const cityListItem = document.createElement('div');
    cityListItem.classList.add('search-list-item');
    cityListItem.innerHTML = `
      <div class="search-item-info me-3">
        <p class="fw-bold mt-2 opacity-75">${city.name}, ${city.sys.country}</p>
      </div>
    `;
    searchList.appendChild(cityListItem);
    cityListItem.addEventListener('click', async () => {
      // Load city details for the selected recent search
      loadCityDetails(city);
    });
  });
}

// نمایش اطلاعات موجود در ای پی آی درون المانهای اچ تی ام ال و در نهایت اجرای تابع loadCityDetails 
// و همچنین لیست شهرها لیست میشود تا کاربر یکی را انتخاب کند
function displayCityList(data) {
  //console.log(data);
  searchList.innerHTML = "";
  const cityListItem = document.createElement('div');
  //console.log(cityListItem);
  cityListItem.classList.add('search-list-item');
  cityListItem.innerHTML = `
        <div class="search-item-info me-3">
            <p class="fw-bold mt-2 opacity-75">${data.name},${data.sys.country}</p>
        </div>
    `;
  // console.log(data.sys.country);
  searchList.appendChild(cityListItem);
  loadCityDetails(data);
}

// حالا لیست شهرها نمایان شده . کاربر روی یک شهر کلیک میکند تا اطلاعات آن شهر در المانهای مختلف نمایش داده شود 
function loadCityDetails(data) {
  const searchListcities = searchList.querySelectorAll('.search-list-item');
  searchListcities.forEach(city => {
    //console.log(city);
    city.addEventListener('click', async () => {

      let cityName = document.querySelector('.city');
      cityName.innerHTML = `${data.name}, ${data.sys.country}`;

      let temperature = document.querySelector('.temp');
      temperature.innerHTML = `${Math.floor(data.main.temp - 273.15)}°C`;

      let temps = document.querySelector('.hi-low-temp');
      temps.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}°c / ${Math.floor(data.main.temp_max - 273.15)}°c `;

      let humidity = document.querySelector('.humidity');
      humidity.innerHTML = `${data.main.humidity}%`;

      let pressure = document.querySelector('.pressure');
      pressure.innerHTML = `${data.main.pressure} hPa`;

      let sunrise = document.querySelector('.sunrise');
      let sunriseTimestamp = data.sys.sunrise; // زمان گرم 
      // تبدیل تاریخ به شی Date
      let sunriseDate = new Date(sunriseTimestamp * 1000);
      // تبدیل تاریخ به رشته با فرمت مورد نظر
      let sunriseTime = sunriseDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
      sunrise.innerHTML = sunriseTime;

      let sunset = document.querySelector('.sunset');
      let sunsetTimestamp = data.sys.sunset; // زمان گرم  
      // تبدیل تاریخ به شی Date
      let sunsetDate = new Date(sunsetTimestamp * 1000);
      // تبدیل تاریخ به رشته با فرمت مورد نظر
      let sunsetTime = sunsetDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
      sunset.innerHTML = sunsetTime;

      let wind = document.querySelector('.wind');
      wind.innerHTML = `${data.wind.speed} m/s`;

      let visibility = document.querySelector('.visibility');
      visibility.innerHTML = `${(data.visibility) / 1000} km`;

      let description = document.querySelector('.description');
      description.innerHTML = `${data.weather[0].description}`;

      let feelslike = document.querySelector('.feels-like');
      feelslike.innerHTML = `${Math.floor(data.main.feels_like - 273.15)}°c`;

      let CityInfowe = document.querySelector('.City-Info-we');
      CityInfowe.innerHTML = `${data.weather[0].main}`;

      let maincitypic = document.querySelector('.maincitypic img');
      let weatherCode = data.weather[0].id;
      let video = document.getElementById("background-video");
      if (weatherCode >= 200 && weatherCode < 300) {
        maincitypic.src = "file:///F:/SAFOORA%20PC%20(Codes)/programming/javascript-exercises/DEMO/Demo-8-weather%20app/images/Thunderstorm 2.jpg";
        maincitypic.classList.add('slide');
        video.innerHTML = '<source src="file:///F:/SAFOORA%20PC%20(Codes)/programming/javascript-exercises/DEMO/Demo-8-weather%20app/images/--(MP4).mp4">';

      } else if (weatherCode >= 300 && weatherCode < 500) {
        maincitypic.src = "file:///F:/SAFOORA%20PC%20(Codes)/programming/javascript-exercises/DEMO/Demo-8-weather%20app/images/Drizzle.jpg";
        maincitypic.classList.add('slide');
        video.innerHTML = '<source src="file:///F:/SAFOORA%20PC%20(Codes)/programming/javascript-exercises/DEMO/Demo-8-weather%20app/images/--(MP4).mp4">';

      } else if (weatherCode >= 500 && weatherCode < 600) {
        maincitypic.src = "file:///F:/SAFOORA%20PC%20(Codes)/programming/javascript-exercises/DEMO/Demo-8-weather%20app/images/rain2.jpg";
        maincitypic.classList.add('slide');
        video.innerHTML = '<source src="file:///F:/SAFOORA%20PC%20(Codes)/programming/javascript-exercises/DEMO/Demo-8-weather%20app/images/--(MP4).mp4">';

      } else if (weatherCode >= 600 && weatherCode < 700) {
        maincitypic.src = "file:///F:/SAFOORA%20PC%20(Codes)/programming/javascript-exercises/DEMO/Demo-8-weather%20app/images/snow.jpg";
        maincitypic.classList.add('slide');
        video.innerHTML = '<source src="file:///F:/SAFOORA%20PC%20(Codes)/programming/javascript-exercises/DEMO/Demo-8-weather%20app/images/--(MP4).mp4">';

      } else if (weatherCode >= 700 && weatherCode < 800) {
        maincitypic.src = "file:///F:/SAFOORA%20PC%20(Codes)/programming/javascript-exercises/DEMO/Demo-8-weather%20app/images/Atmosphere.jpg";
        maincitypic.classList.add('slide');
        video.innerHTML = '<source src="file:///F:/SAFOORA%20PC%20(Codes)/programming/javascript-exercises/DEMO/Demo-8-weather%20app/images/--(MP4).mp4">';

      } else if (weatherCode == 800) {
        maincitypic.src = "file:///F:/SAFOORA%20PC%20(Codes)/programming/javascript-exercises/DEMO/Demo-8-weather%20app/images/clear1.jpg";
        maincitypic.classList.add('slide');
        video.innerHTML = '<source src="file:///F:/SAFOORA%20PC%20(Codes)/programming/javascript-exercises/DEMO/Demo-8-weather%20app/images/sunny.mp4">';

      } else if (weatherCode > 800 && weatherCode < 900) {
        maincitypic.src = "file:///F:/SAFOORA%20PC%20(Codes)/programming/javascript-exercises/DEMO/Demo-8-weather%20app/images/sky-216118_1280.jpg";
        maincitypic.classList.add('slide');
        video.innerHTML = '<source src="file:///F:/SAFOORA%20PC%20(Codes)/programming/javascript-exercises/DEMO/Demo-8-weather%20app/images/cloudy.mp4">';

      } else {
        maincitypic.src = "icons/desert-279862_1920.jpg";
      }

      searchList.classList.add('hide-search-list');
      citySearchBox.value = '';

      const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.name}&appid=${apikey}`);
      const cityDetails = await result.json();
      console.log(cityDetails);

      getWeather();
      getLocalTime(data.coord.lat, data.coord.lon);
      displayForecast(data.coord.lat, data.coord.lon);
      displayHourlyForecast(data.coord.lat, data.coord.lon);
      displayResultHourly(data.coord.lat, data.coord.lon);
    });
  })
}

//تعیین ساعت محلی شهرهای مختلف
async function getLocalTime(lat, lon) {
  const CityInfotime = document.querySelector('.City-Info-time');

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
  const response = await fetch(url);
  const data = await response.json();
  const localTime = new Date(data.dt * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  CityInfotime.innerHTML = localTime;
  console.log(localTime);
}

















// function for 5 days forecast
async function displayForecast(lat, lon) {
  const apikey = "9f655254782ec7e3e9d95e4b66ce920c";
  const forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`;

  const forecastResult = await fetch(forecastAPI);
  const forecastData = await forecastResult.json();
  console.log(forecastData);

  // انتخاب تمام داده‌های مربوط به هواشناسی برای هر روز
  const dailyForecasts = forecastData.list.filter((item) => item.dt_txt.includes('12:00:00'));

  // انتخاب المان‌های مربوط به نمایش پیش‌بینی
  const forecastElements = document.querySelectorAll('.details-forecast');

  // نمایش اطلاعات هواشناسی برای هر روز
  dailyForecasts.forEach((data, index) => {
    if (index < forecastElements.length) {
      const forecastElement = forecastElements[index];

      // مقداردهی به المان‌های مربوط به هواشناسی برای هر روز
      const day = new Date(data.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
      const temperature = Math.floor(data.main.temp - 273.15);
      const icon = data.weather[0].icon;

      // تنظیم مقادیر در المان‌های HTML
      forecastElement.querySelector('.weekday').innerHTML = day;
      forecastElement.querySelector('.img-forecast').src = `https://openweathermap.org/img/w/${icon}.png`;
      forecastElement.querySelector('.tempreture').innerHTML = `${temperature}°C`;
    }
  });
}

// function for 5 hours forecast
async function displayHourlyForecast(lat, lon) {
  const apikey = "9f655254782ec7e3e9d95e4b66ce920c";
  const forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`;

  const forecastResult = await fetch(forecastAPI);
  const forecastData = await forecastResult.json();
  console.log(forecastData);

  // Select all weather data for each hour
  const hourlyForecasts = forecastData.list.filter((item) => {
    const hour = new Date(item.dt * 1000).getHours();
    return [6, 9, 12, 15, 118].includes(hour);
  });

  // Select elements for hourly forecast display
  const forecastElements = document.querySelectorAll('.forecast-h');

  // Create an array of translations for the hours
  const hourTranslations = ['6 AM', '9 AM', '12', '15 PM', '6 PM'];

  // Display weather information for each hour
  hourlyForecasts.forEach((data, index) => {
    if (index < forecastElements.length) {
      const forecastElement = forecastElements[index];

      // Get the corresponding translation for the hour
      const hour = hourTranslations[index];
      const icon = data.weather[0].icon;
      const description = data.weather[0].description;

      // Set values in HTML elements
      forecastElement.querySelector('.hour').innerHTML = hour;
      forecastElement.querySelector('.img-forecast-h').src = `https://openweathermap.org/img/w/${icon}.png`;
      forecastElement.querySelector('.img-forecast-h').alt = description;
      forecastElement.querySelector('.description-h p').innerHTML = description;
    }
  });
}


function displayResultHourly(lat, lon) {

  const selectDailyForecast = document.querySelectorAll('.details-forecast');
  selectDailyForecast.forEach(daily => {
    daily.addEventListener('click', async () => {


      // انتخاب تمام عناصر با کلاس "details-forecast"
      const detailsForecastElements = document.querySelectorAll('.details-forecast');
      // اضافه کردن  رویداد کلیک به هر عنصر
      detailsForecastElements.forEach(element => {
        element.addEventListener('click', function () {
          // حذف کلاس "active" از تمام عناصر با کلاس "details-forecast"
          detailsForecastElements.forEach(element => {
            element.classList.remove('active');
          });
          // اضافه کردن کلاس "active" به عنصر کلیک شده
          this.classList.add('active');
        });
      });




      const apikey = "9f655254782ec7e3e9d95e4b66ce920c";
      const forecastAPIHourly = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`;
      const result = await fetch(forecastAPIHourly);
      const data = await result.json();



      const hourly = document.querySelector('#resulthourly');
      hourly.innerHTML = `
       
                <li class="hourly-d">
               <div class="row mt-2 hourly-day me-3 ms-3">
                 <div class="col-12 d-flex justify-content-center align-items-center mt-1">
                   <p class="ms-4 fw-bold tw fs-5">${namedayweek}</p>
                   <p class="ms-4">
                     <img src="images/rain.png " width="40px">
                   </p>
                   <p class="fw-bold hi-low-hourly fs-5">${Math.floor(data.list[0].main.temp_min - 273.15)}°c | ${Math.floor(data.list[0].main.temp_max - 273.15)}°c</p>
                 </div>
               </div>
          
               <div class="row me-2 mt-3 ">
                 <div class="col-4 ">
                   <div class="row mt-4 ">
                     <div class="col-4">
                       <p class="fw-bold hourly-text me-2">0</p>
                     </div>
                     <div class="col-8 d-flex">
                       <P><img src="images/rain.png " width="30px"></P>
                       <P class="me-2 fw-bold hourly-text ">Sunny</P>
                     </div>
                   </div>
                 </div>
                 <div class="col-8">
                   <div class="row me-4 mb-5 mt-4">
                     <div
                       class="col-3 d-flex flex-column justify-content-center align-items-center details">
                       <p class="hourly-title fw-bold">humidity</p>
                       <p class="hourly-text fw-bold">${data.list[0].main.humidity}%</p>
                     </div>
                    
                     <div
                       class="col-3 d-flex flex-column justify-content-center align-items-center details">
                       <p class="hourly-title fw-bold">pressure</p>
                       <p class="hourly-text fw-bold">${data.list[0].main.pressure}hPa</p>
                     </div>
                     <div
                       class="col-3 d-flex flex-column justify-content-center align-items-center details">
                       <p class="hourly-title fw-bold">feels like</p>
                       <p class="hourly-text fw-bold">${Math.floor(data.list[0].main.feels_like - 273.15)}°c</p>
                     </div>
                     <div
                       class="col-3 d-flex flex-column justify-content-center align-items-center details ">
                       <p class="hourly-title fw-bold">visibility</p>
                       <p class="hourly-text fw-bold">${(data.list[0].visibility) / 1000} km</p>
                     </div>
                    
                   </div>
                 </div>
               </div>
             </li> 
             
             ` ;
    });

  })


}

