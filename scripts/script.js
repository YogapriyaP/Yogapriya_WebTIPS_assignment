import { mydata } from './data.js';
import { changeActiveState } from './Active.js';
// import { sortCities } from './sort.js';
import { sortContTemp } from './sort.js';
sortContTemp();

// import { cityArray } from './sort.js';

//..................................Event to populate the city names into the dropdown........................//
var city_key = [];
let city_inherit,child_inherit;
let timer;
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

//..........................Constructor to assign the values of the properties of mydata.....................//
function citySelect(selected_city) {
  this.cityName = selected_city.cityName;
  this.dateAndTime = selected_city.dateAndTime;
  this.timeZone = selected_city.timeZone;
  this.temperature = selected_city.temperature;
  this.humidity = selected_city.humidity;
  this.precipitation = selected_city.precipitation;
  this.nextFiveHrs = selected_city.nextFiveHrs;
}

function citySelect_child(selected_city) {
  citySelect.call(this, selected_city);
}

//.................................Methods defined using prototypes..............................//
citySelect.prototype.ChangeIcon = function () {
  let icon = document.getElementById('city-icon');
  icon.setAttribute(
    'src',
    `assets/HTML & CSS/Icons for cities/${this.cityName}.svg`
  );
};

citySelect.prototype.ChangeTemp = function () {
  let tempinc = document.getElementById('temp-c');
  tempinc.innerHTML = this.temperature;
  let tempinf = document.getElementById('temp-f');
  tempinf.innerHTML = Math.round(TempcToTempF(this.temperature)) + '°F';
  let humidity = document.getElementById('humi_dity');
  humidity.innerHTML = this.humidity;
  let precipitation = document.getElementById('prec');
  precipitation.innerHTML = this.precipitation;
};
//.......................................Function to change the time and state..............................//

citySelect.prototype.ChangeTime = function () {
  let time = this.dateAndTime.split(',')[1];
  let hours = time.split(':')[0];
  let minutes = time.split(':')[1];
  let seconds = time.split(':')[2];
  let second = parseInt(seconds);

  let state = seconds.split(' ')[1];
  let s_icon = document.getElementById('ampmstate');

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
};

//......................................Function to change the Date......................................//

citySelect.prototype.ChangeDate = function () {
  let date_ = document.getElementById('citydate');
  let mydate = this.dateAndTime.split(',')[0];
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
};

citySelect.prototype.ChangeTimeline = function () {
  let now = (document.getElementById('now').innerHTML = this.temperature);
  let one = (document.getElementById('onehour').innerHTML =
    this.nextFiveHrs[0]);
  let two = (document.getElementById('twohours').innerHTML =
    this.nextFiveHrs[1]);
  let three = (document.getElementById('threehours').innerHTML =
    this.nextFiveHrs[2]);
  let four = (document.getElementById('fourhours').innerHTML =
    this.nextFiveHrs[3]);
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
};
citySelect_child.prototype = Object.create(citySelect.prototype);

window.addEventListener('load', defaultValue);
function defaultValue() {
  let default_city = city_key[0];
  city_inherit = new citySelect(mydata[default_city]);
  child_inherit=new citySelect_child(mydata[default_city]);
  child_inherit.__proto__=city_inherit;
  child_inherit.ChangeTime();
  child_inherit.ChangeDate();
  child_inherit.ChangeTemp();
  child_inherit.ChangeTimeline();
  child_inherit.ChangeIcon();
}


//............................Function to change values of the top section...........................//
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
  //............................If the selected city is null or invalid..........................//
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
  }
  //....................If the selected city is not null or invalid..............................//
  else {
    city_inherit = new citySelect_child(mydata[val]);
    document.getElementById('citytime').style.visibility = 'visible';
    city_inherit.ChangeTime();
    city_inherit.ChangeDate();
    city_inherit.ChangeTemp();
    city_inherit.ChangeTimeline();
    city_inherit.ChangeIcon();
  }
}

function getNil(id) {
  document.getElementById(id).innerHTML = 'NIL';
}

//...................................Function to convert temperature from C to F..............................//

function TempcToTempF(tempinc) {
  return (parseInt(tempinc) * 9) / 5 + 32;
}

//...............................Function to change runtime in time display and timeline.....................//

function ChangeRunTime(hours, minutes, second, state) {
  clearInterval(timer);
  timer = setInterval(myTimer, 1000);

  function myTimer() {
    second++;
    if (second == 60) {
      second = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
      // setInterval(myTimer, 1000);
    }

    function checkTime(i) {
      // add zero in front of numbers < 10
      if (i < 10) {
        i = '0' + i;
      }
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

//.......................Function to Change the weather details in the timeline for next 4 hours.................//

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

window.addEventListener('load', middleSection);

function middleSection(val) {
  LeftandRightScroll();
  setTimeout(changeActiveState, 100);
}
//...........................................................Left and Right Scroll.......................................//

function LeftandRightScroll() {
  (function getElements() {
    let left = document.getElementById('left-scroll');
    let right = document.getElementById('right-scroll');
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
