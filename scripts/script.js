import { mydata } from './data.js';
console.log(mydata);
// let mydata = {
//   nome: {
//     cityName: 'Nome',
//     dateAndTime: '3/31/2020, 9:21:46 PM',
//     timeZone: 'America/Nome',
//     temperature: '4°C',
//     humidity: '91%',
//     precipitation: '8%',
//     nextFiveHrs: ['6°C', '7°C', '11°C', '2°C'],
//   },
//   newyork: {
//     cityName: 'NewYork',
//     dateAndTime: '4/1/2020, 1:21:46 AM',
//     timeZone: 'America/New_york',
//     temperature: '23°C',
//     humidity: '52%',
//     precipitation: '46%',
//     nextFiveHrs: ['18°C', '20°C', '18°C', '17°C'],
//   },
//   jamaica: {
//     cityName: 'Jamaica',
//     dateAndTime: '4/1/2020, 12:21:46 AM',
//     timeZone: 'America/Jamaica',
//     temperature: '29°C',
//     humidity: '39%',
//     precipitation: '58%',
//     nextFiveHrs: ['24°C', '27°C', '28°C', '24°C'],
//   },
//   losangeles: {
//     cityName: 'LosAngeles',
//     dateAndTime: '3/31/2020, 10:21:46 PM',
//     timeZone: 'America/Los_Angeles',
//     temperature: '23°C',
//     humidity: '52%',
//     precipitation: '46%',
//     nextFiveHrs: ['19°C', '21°C', '23°C', '18°C'],
//   },
//   winnipeg: {
//     cityName: 'Winnipeg',
//     dateAndTime: '4/1/2020, 12:21:46 AM',
//     timeZone: 'America/Winnipeg',
//     temperature: '9°C',
//     humidity: '81%',
//     precipitation: '18%',
//     nextFiveHrs: ['3°C', '7°C', '4°C', '-1°C'],
//   },
//   juba: {
//     cityName: 'Juba',
//     dateAndTime: '4/1/2020, 8:21:46 AM',
//     timeZone: 'Africa/Juba',
//     temperature: '18°C',
//     humidity: '62%',
//     precipitation: '36%',
//     nextFiveHrs: ['37°C', '41°C', '38°C', '37°C'],
//   },
//   maseru: {
//     cityName: 'Maseru',
//     dateAndTime: '4/1/2020, 7:21:46 AM',
//     timeZone: 'Africa/Maseru',
//     temperature: '43°C',
//     humidity: '10%',
//     precipitation: '86%',
//     nextFiveHrs: ['17°C', '17°C', '19°C', '15°C'],
//   },
//   london: {
//     cityName: 'London',
//     dateAndTime: '4/1/2020, 6:21:46 AM',
//     timeZone: 'Europe/London',
//     temperature: '7°C',
//     humidity: '85%',
//     precipitation: '14%',
//     nextFiveHrs: ['-7°C', '-6°C', '-5°C', '-10°C'],
//   },
//   vienna: {
//     cityName: 'Vienna',
//     dateAndTime: '4/1/2020, 7:21:46 AM',
//     timeZone: 'Europe/Vienna',
//     temperature: '10°C',
//     humidity: '79%',
//     precipitation: '20%',
//     nextFiveHrs: ['-1°C', '-1°C', '4°C', '-2°C'],
//   },
//   moscow: {
//     cityName: 'Moscow',
//     dateAndTime: '4/1/2020, 8:21:46 AM',
//     timeZone: 'Europe/Moscow',
//     temperature: '11°C',
//     humidity: '77%',
//     precipitation: '22%',
//     nextFiveHrs: ['12°C', '14°C', '15°C', '8°C'],
//   },
//   dublin: {
//     cityName: 'Dublin',
//     dateAndTime: '4/1/2020, 6:21:46 AM',
//     timeZone: 'Europe/Dublin',
//     temperature: '15°C',
//     humidity: '68%',
//     precipitation: '30%',
//     nextFiveHrs: ['24°C', '28°C', '29°C', '21°C'],
//   },
//   karachi: {
//     cityName: 'Karachi',
//     dateAndTime: '4/1/2020, 10:21:46 AM',
//     timeZone: 'Asia/Karachi',
//     temperature: '25°C',
//     humidity: '47%',
//     precipitation: '50%',
//     nextFiveHrs: ['21°C', '24°C', '21°C', '19°C'],
//   },
//   kolkata: {
//     cityName: 'Kolkata',
//     dateAndTime: '4/1/2020, 10:51:46 AM',
//     timeZone: 'Asia/Kolkata',
//     temperature: '34°C',
//     humidity: '29%',
//     precipitation: '68%',
//     nextFiveHrs: ['33°C', '35°C', '37°C', '32°C'],
//   },
//   yangon: {
//     cityName: 'Yangon',
//     dateAndTime: '4/1/2020, 11:51:46 AM',
//     timeZone: 'Asia/Yangon',
//     temperature: '24°C',
//     humidity: '50%',
//     precipitation: '48%',
//     nextFiveHrs: ['31°C', '32°C', '36°C', '27°C'],
//   },
//   bangkok: {
//     cityName: 'BangKok',
//     dateAndTime: '4/1/2020, 12:21:46 PM',
//     timeZone: 'Asia/BangKok',
//     temperature: '32°C',
//     humidity: '33%',
//     precipitation: '64%',
//     nextFiveHrs: ['32°C', '34°C', '32°C', '32°C'],
//   },
//   seoul: {
//     cityName: 'Seoul',
//     dateAndTime: '4/1/2020, 2:21:46 PM',
//     timeZone: 'Asia/Seoul',
//     temperature: '6°C',
//     humidity: '87%',
//     precipitation: '12%',
//     nextFiveHrs: ['1°C', '1°C', '3°C', '0°C'],
//   },
//   anadyr: {
//     cityName: 'Anadyr',
//     dateAndTime: '4/1/2020, 5:21:46 PM',
//     timeZone: 'Asia/Anadyr',
//     temperature: '-2°C',
//     humidity: '100%',
//     precipitation: '0%',
//     nextFiveHrs: ['-1°C', '3°C', '-1°C', '-3°C'],
//   },
//   brokenhill: {
//     cityName: 'BrokenHill',
//     dateAndTime: '4/1/2020, 3:51:46 PM',
//     timeZone: 'Australia/Broken_Hill',
//     temperature: '10°C',
//     humidity: '79%',
//     precipitation: '20%',
//     nextFiveHrs: ['17°C', '21°C', '22°C', '15°C'],
//   },
//   perth: {
//     cityName: 'Perth',
//     dateAndTime: '4/1/2020, 1:21:46 PM',
//     timeZone: 'Australia/Perth',
//     temperature: '18°C',
//     humidity: '62%',
//     precipitation: '36%',
//     nextFiveHrs: ['6°C', '10°C', '11°C', '6°C'],
//   },
//   auckland: {
//     cityName: 'Auckland',
//     dateAndTime: '4/1/2020, 6:21:46 PM',
//     timeZone: 'Pacific/Auckland',
//     temperature: '17°C',
//     humidity: '64%',
//     precipitation: '34%',
//     nextFiveHrs: ['17°C', '19°C', '18°C', '17°C'],
//   },
//   vostok: {
//     cityName: 'Vostok',
//     dateAndTime: '4/1/2020, 11:21:46 AM',
//     timeZone: 'Antarctica/Vostok',
//     temperature: '-61°C',
//     humidity: '100%',
//     precipitation: '0%',
//     nextFiveHrs: ['-64°C', '-59°C', '-64°C', '-68°C'],
//   },
//   troll: {
//     cityName: 'Troll',
//     dateAndTime: '4/1/2020, 7:21:46 AM',
//     timeZone: 'Antarctica/Troll',
//     temperature: '-52°C',
//     humidity: '100%',
//     precipitation: '0%',
//     nextFiveHrs: ['-70°C', '-70°C', '-66°C', '-71°C'],
//   },
// };

//..................................Event to populate the city names into the dropdown........................//
var city_key = [];
let city_list = function PopulateDropDownList() {
  var cities = document.getElementById('city_dropdown');

  // console.log(cities);
  for (var k in mydata) {
    city_key.push(k);
  }
  city_key.sort();
  for (let i in city_key) {
    cities.innerHTML += `<option value="${city_key[i].toUpperCase()}">`;
  }
};
window.addEventListener('load', city_list);

//....................................Functions to change values of the top section...........................//
document.getElementById('city_input').addEventListener('change', ChangeValues);
function ChangeValues() {
  let flag = 0;
  let city = document.getElementById('city_input');
  let val = city.value.toLowerCase();
  for (var key in mydata) {
    let city_name = mydata[key].cityName.toLowerCase();
    if (val == city_name) {
      flag++;
    }
  }
  if (flag == 0) {
    let icon = document.getElementById('city-icon');
    icon.setAttribute(
      'src',
      'assets/HTML & CSS/General Images & Icons/warning.svg'
    );
    getNil('temp-c');
    getNil('temp-f');
    getNil('humi_dity');
    getNil('prec');
    getNil('now');
    getNil('onehour');
    getNil('twohours');
    getNil('threehours');
    getNil('fourhours');
    document.getElementById('citydate').innerHTML = ' ';
    document.getElementById('citytime').style.visibility = 'hidden';
    document.getElementById('ampmstate').setAttribute('src', '');
    document.getElementById('icon_now').setAttribute('src', '');
    document.getElementById('icon_one').setAttribute('src', '');
    document.getElementById('icon_two').setAttribute('src', '');
    document.getElementById('icon_three').setAttribute('src', '');
    document.getElementById('icon_four').setAttribute('src', '');
  } else {
    document.getElementById('citytime').style.visibility = 'visible';
    ChangeDate(val);
    ChangeTime(val);
    ChangeTemp(val);
    // ChangeTimeline(val);
    ChangeIcon(val);
  }
}
function getNil(id) {
  document.getElementById(id).innerHTML = 'NIL';
}

function ChangeIcon(val) {
  let icon = document.getElementById('city-icon');
  icon.setAttribute('src', `assets/HTML & CSS/Icons for cities/${val}.svg`);
}

function ChangeTemp(val) {
  // if(val==undefined)
  let tempinc = document.getElementById('temp-c');
  console.log(tempinc);
  tempinc.innerHTML = mydata[val].temperature;
  let tempinf = document.getElementById('temp-f');
  tempinf.innerHTML = Math.round(TempcToTempF(mydata[val].temperature)) + '°F';
  let humidity = document.getElementById('humi_dity');
  humidity.innerHTML = mydata[val].humidity;
  let precipitation = document.getElementById('prec');
  precipitation.innerHTML = mydata[val].precipitation;
}

//...................................Function to convert temperature from C to F..............................//

function TempcToTempF(tempinc) {
  return (parseInt(tempinc) * 9) / 5 + 32;
}

//.......................................Function to change the time and state..............................//

function ChangeTime(val) {
  // let time_ = document.getElementById('citytime');
  let time = mydata[val].dateAndTime.split(',')[1];
  // time_.innerHTML = time.split(' ')[1];
  let hours = time.split(':')[0];
  let minutes = time.split(':')[1];
  let seconds = time.split(':')[2];
  let second = parseInt(seconds);

  let state = seconds.split(' ')[1];
  let s_icon = document.getElementById('ampmstate');
  console.log(s_icon);
  if (state == 'AM') {
    s_icon.setAttribute(
      'src',
      'assets/HTML & CSS/General Images & Icons/amState.svg'
    );
  } else if (state == 'PM') {
    s_icon.setAttribute(
      'src',
      'assets/HTML & CSS/General Images & Icons/pmState.svg'
    );
  }

  ChangeRunTime(hours, minutes, second, state);
}
let timer;
function ChangeRunTime(hours, minutes, second, state) {
  clearInterval(timer);
  timer = setInterval(myTimer, 1000);

  function myTimer() {
    second++;
    if (second == 60) {
      second = 0;
      // clearInterval(timer);
      minutes++;
      // setInterval(myTimer, 1000);
    }
    if (minutes == 60) {
      minutes = 0;
      // clearInterval(timer);
      hours++;
      // setInterval(myTimer, 1000);
    }
    console.log(minutes + ':' + second);
    function checkTime(i) {
      if (i < 10) {
        i = '0' + i;
      } // add zero in front of numbers < 10
      return i;
    }

    document.getElementById('citytime').innerHTML =
      hours + ':' + checkTime(minutes) + ':' + checkTime(second);
    ChangeTimelineTime(hours, state, 'one_hour', 1);
    ChangeTimelineTime(hours, state, 'two_hour', 2);
    ChangeTimelineTime(hours, state, 'three_hour', 3);
    ChangeTimelineTime(hours, state, 'four_hour', 4);
  }
}

function ChangeTimelineTime(hours, state, id, i) {
  let h = document.getElementById(id);
  let st_twelve;
  let state_;
  if (state == 'AM') {
    st_twelve = 'PM';
  } else {
    st_twelve = 'AM';
  }
  if (hours == 12) {
    h.innerHTML = +hours + i - 12 + `${state}`;
  } else if (+hours + i == 12) {
    let hour_twelve = +hours + i;
    h.innerHTML = +hours + i + `${st_twelve}`;
  } else if (+hours + i > 12) {
    if (st_twelve == 'AM') {
      state_ = 'AM';
    } else {
      state_ = 'PM';
    }
    h.innerHTML = +hours + i - 12 + `${state_}`;
  } else {
    // console.log(+hours + i);
    h.innerHTML = +hours + i + `${state}`;
  }
}

//......................................Function to change the Date......................................//

function ChangeDate(val) {
  let date_ = document.getElementById('citydate');
  let mydate = mydata[val].dateAndTime.split(',')[0];
  let date = mydate.split('/')[1];
  let month = mydate.split('/')[0];
  let year = mydate.split('/')[2];
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  month = months[month - 1];
  date_.innerHTML = date + '-' + month + '-' + year;
}

//.......................Function to Change the weather details in the timeline for next 4 hours.................//

function ChangeTimeline(val) {
  let now = (document.getElementById('now').innerHTML =
    mydata[val].temperature);
  let one = (document.getElementById('onehour').innerHTML =
    mydata[val].nextFiveHrs[0]);
  let two = (document.getElementById('twohours').innerHTML =
    mydata[val].nextFiveHrs[1]);
  let three = (document.getElementById('threehours').innerHTML =
    mydata[val].nextFiveHrs[2]);
  let four = (document.getElementById('fourhours').innerHTML =
    mydata[val].nextFiveHrs[3]);
  let temp = now.split('°')[0];
  let temp1 = one.split('°')[0];
  let temp2 = two.split('°')[0];
  let temp3 = three.split('°')[0];
  let temp4 = four.split('°')[0];
  ChangeWeatherIcon(temp, 'icon_now');
  ChangeWeatherIcon(temp1, 'icon_one');
  ChangeWeatherIcon(temp2, 'icon_two');
  ChangeWeatherIcon(temp3, 'icon_three');
  ChangeWeatherIcon(temp4, 'icon_four');
}

//........................Function to Change the weather Icon in the timeline.............................//

function ChangeWeatherIcon(temp, id) {
  let weather_icon = document.getElementById(id);
  weather_icon.setAttribute(
    'src',
    ` assets/HTML & CSS/Weather Icons/${
      temp < 0
        ? 'snowFlakeIcon'
        : temp < 18
        ? 'rainyIcon'
        : temp <= 22
        ? 'windyIcon'
        : temp <= 29
        ? 'cloudyIcon'
        : 'sunnyIcon'
    }.svg`
  );
}

//.............................................Middle Section..............................................//

let nav_items = document.getElementsByClassName('navbar-item');
function activeItem() {
  let current = document.getElementsByClassName('active');
  current[0].className = current[0].className.replace(' active', '');
  this.className += ' active';
}

//...........................................................Left and Right Scroll.......................................//

window.addEventListener('load', middleSection);

function middleSection() {
  LeftandRightScroll();
  changeActiveState();
}

function LeftandRightScroll() {
  (function getElements() {
    var left = document.getElementById('left-scroll');
    var right = document.getElementById('right-scroll');
    left.addEventListener('click', leftScroll);
    right.addEventListener('click', rightScroll);
  })();

  function leftScroll() {
    document.getElementById('card-container').scrollLeft -= 150;
  }
  function rightScroll() {
    document.getElementById('card-container').scrollLeft += 150;
  }
}

//..................................Function to change the active state of the weather Icon in the navigation bar.................//

function changeActiveState() {
  var icon_sunny = document.getElementById('sunny_icon');
  var icon_snowy = document.getElementById('snowy_icon');
  var icon_rainy = document.getElementById('rainy_icon');
  icon_sunny.addEventListener('click', activeSunny);
  icon_snowy.addEventListener('click', activeSnowy);
  icon_rainy.addEventListener('click', activeRainy);

  function activeSunny() {
    icon_sunny.setAttribute('class', 'navbar-item active');
    icon_rainy.setAttribute('class', 'navbar-item');
    icon_snowy.setAttribute('class', 'navbar-item');
  }
  function activeSnowy() {
    icon_snowy.setAttribute('class', 'navbar-item active');
    icon_sunny.setAttribute('class', 'navbar-item');
    icon_rainy.setAttribute('class', 'navbar-item');
  }
  function activeRainy() {
    icon_rainy.setAttribute('class', 'navbar-item active');
    icon_sunny.setAttribute('class', 'navbar-item');
    icon_snowy.setAttribute('class', 'navbar-item');
  }
}
