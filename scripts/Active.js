import { mydata } from './data.js';
let city_array = [];
for (let key in mydata) {
  city_array.push(mydata[key]);
}

//....................Function to change the active state of the weather Icon in the navigation bar................//

export function changeActiveState() {
  let t;
  var icon_sunny = document.getElementById('sunny_icon');
  var icon_snowy = document.getElementById('snowy_icon');
  var icon_rainy = document.getElementById('rainy_icon');
  icon_sunny.addEventListener('click', activeSunny);
  icon_snowy.addEventListener('click', activeSnowy);
  icon_rainy.addEventListener('click', activeRainy);
  var display = document.getElementById('input-display');
  var icon_id;
  let temp_sunny = [];
  let temp_snowy = [];
  let temp_rainy = [];

  function filterSunny(value) {
    return (
      value.temperature.replace('°C', '') >= 29 ||
      value.humidity.replace('%', '') <= 50
    );
  }
  function filterSnowy(value) {
    return (
      (value.temperature.replace('°C', '') > 20 &&
        value.temperature.replace('°C', '') < 29 &&
        value.precipitation.replace('%', '') > 50) ||
      value.humidity.replace('%', '') > 50
    );
  }
  function filterRainy(value) {
    return (
      value.temperature.replace('°C', '') < 20 ||
      value.humidity.replace('%', '') >= 50
    );
  }

  temp_sunny = city_array.filter(filterSunny);
  temp_snowy = city_array.filter(filterSnowy);
  temp_rainy = city_array.filter(filterRainy);

  function activeSunny() {
    icon_sunny.setAttribute('class', 'navbar-item active');
    icon_rainy.setAttribute('class', 'navbar-item');
    icon_snowy.setAttribute('class', 'navbar-item');
    icon_id = icon_sunny.id;
    document.getElementById('card-container').innerHTML = ' ';
    temp_sunny.sort((a, b) => {
      return +b.temperature.split('°')[0] - +a.temperature.split('°')[0];
    });
    let len = document.getElementById('input-display').value;

    for (let k = 0; k < len; k++) {
      document.getElementById(
        'card-container'
      ).innerHTML += `<li class="card" style="background-image: url('assets/HTML & CSS/Icons for cities/${temp_sunny[
        k
      ].cityName.toLowerCase()}.svg');">
          <div class="card-title">
          <p><b>${temp_sunny[k].cityName}</b></p>
          <p><img alt="Snowy" src=" assets/HTML & CSS/Weather Icons/sunnyIcon.svg" width="20px" height="15px"> ${
            temp_sunny[k].temperature
          }</p>
      </div>
          <p class="display_time">${
            temp_sunny[k].dateAndTime.split(',')[1].split(':')[0] +
            ':' +
            temp_sunny[k].dateAndTime.split(',')[1].split(':')[1] +
            ' ' +
            temp_sunny[k].dateAndTime.split(',')[1].split(':')[2].split(' ')[1]
          }</p>
          <p>${temp_sunny[k].dateAndTime.split(',')[0]}</p>
          <p><img alt="Sunny" src=" assets/HTML & CSS/Weather Icons/humidityIcon.svg" width="20px"  height="15px"> ${
            temp_sunny[k].humidity.split('%')[0]
          } %</p>
          <p><img alt="Sunny" src=" assets/HTML & CSS/Weather Icons/precipitationIcon.svg" width="20px"  height="15px"> ${
            temp_sunny[k].precipitation.split('%')[0]
          } %</p>
  
      </li>`;
    }
    clearInterval(t);
    t = setInterval(() => {
      getTime('.card_container');
    }, 60000);
  }

  function activeSnowy() {
    icon_sunny.setAttribute('class', 'navbar-item');
    icon_rainy.setAttribute('class', 'navbar-item');
    icon_snowy.setAttribute('class', 'navbar-item active');
    icon_id = icon_snowy.id;
    // console.log(icon_id);

    document.getElementById('card-container').innerHTML = ' ';
    temp_snowy.sort((a, b) => {
      return +b.precipitation.split('%')[0] - +a.precipitation.split('%')[0];
    });
    let len = document.getElementById('input-display').value;

    for (let k = 0; k < len; k++) {
      document.getElementById(
        'card-container'
      ).innerHTML += `<li class="card" style="background-image: url('assets/HTML & CSS/Icons for cities/${temp_snowy[
        k
      ].cityName.toLowerCase()}.svg');">
          <div class="card-title">
          <p><b>${temp_snowy[k].cityName}</b></p>
          <p><img alt="Snowy" src=" assets/HTML & CSS/Weather Icons/snowflakeIcon.svg" width="20px" height="15px"> ${
            temp_snowy[k].temperature
          }</p>
      </div>
          <p class="display_time">${
            temp_snowy[k].dateAndTime.split(',')[1].split(':')[0] +
            ':' +
            temp_snowy[k].dateAndTime.split(',')[1].split(':')[1] +
            ' ' +
            temp_snowy[k].dateAndTime.split(',')[1].split(':')[2].split(' ')[1]
          }</p>
          <p>${temp_snowy[k].dateAndTime.split(',')[0]}</p>
          <p><img alt="Sunny" src=" assets/HTML & CSS/Weather Icons/humidityIcon.svg" width="20px"  height="15px"> ${
            temp_snowy[k].humidity.split('%')[0]
          } %</p>
          <p><img alt="Sunny" src=" assets/HTML & CSS/Weather Icons/precipitationIcon.svg" width="20px"  height="15px"> ${
            temp_snowy[k].precipitation.split('%')[0]
          } %</p>
  
      </li>`;
    }
    clearInterval(t);
    t = setInterval(() => {
      getTime('.card_container');
    }, 60000);
  }

  function activeRainy() {
    icon_sunny.setAttribute('class', 'navbar-item');
    icon_rainy.setAttribute('class', 'navbar-item active');
    icon_snowy.setAttribute('class', 'navbar-item');
    icon_id = icon_rainy.id;
    // console.log(icon_id);

    document.getElementById('card-container').innerHTML = ' ';
    temp_rainy.sort((a, b) => {
      return +b.humidity.split('%')[0] - +a.humidity.split('%')[0];
    });
    let len = document.getElementById('input-display').value;

    for (let k = 0; k < len; k++) {
      document.getElementById(
        'card-container'
      ).innerHTML += `<li class="card" style="background-image: url('assets/HTML & CSS/Icons for cities/${temp_rainy[
        k
      ].cityName.toLowerCase()}.svg');">
          <div class="card-title">
          <p><b>${temp_rainy[k].cityName}</b></p>
          <p><img alt="Rainy" src=" assets/HTML & CSS/Weather Icons/rainyIcon.svg" width="20px" height="15px"> ${
            temp_rainy[k].temperature
          }</p>
      </div>
          <p id="display_time">${
            temp_rainy[k].dateAndTime.split(',')[1].split(':')[0] +
            ':' +
            temp_rainy[k].dateAndTime.split(',')[1].split(':')[1] +
            ' ' +
            temp_rainy[k].dateAndTime.split(',')[1].split(':')[2].split(' ')[1]
          }</p>
          <p>${temp_rainy[k].dateAndTime.split(',')[0]}</p>
          <p><img alt="Sunny" src=" assets/HTML & CSS/Weather Icons/humidityIcon.svg" width="20px"  height="15px"> ${
            temp_rainy[k].humidity.split('%')[0]
          } %</p>
          <p><img alt="Sunny" src=" assets/HTML & CSS/Weather Icons/precipitationIcon.svg" width="20px"  height="15px"> ${
            temp_rainy[k].precipitation.split('%')[0]
          } %</p>
  
      </li>`;
    }
    clearInterval(t);
    t = setInterval(() => {
      getTime('.card_container');
    }, 60000);
  }
  display.onchange=function(){
    DisplayCity.call(this);
  }

  function DisplayCity() {
    if (icon_id == 'sunny_icon') {
      activeSunny();
    }
    if (icon_id == 'snowy_icon') {
      activeSnowy();
    }
    if (icon_id == 'rainy_icon') {
      activeRainy();
    }
  }

  //Function to check overflow of the cards and make scroll button hidden

  function isOverFlow() {
    let left = document.getElementById('left-scroll');
    let right = document.getElementById('right-scroll');
    let scroll = document.getElementById('card-container');
    let len = document.getElementById('input-display').value;
    if (240 * len < scroll.clientWidth) {
      left.style.visibility = 'hidden';
      right.style.visibility = 'hidden';
      scroll.style.justifyContent = 'center';
    } else {
      left.style.visibility = 'visible';
      right.style.visibility = 'visible';
      scroll.style.justifyContent = 'normal';
    }
  }
  let of;
  clearInterval(of);
  of = setInterval(isOverFlow, 100);
  document.getElementById('sunny_icon').click();
}

// Function to run the time on the cards

function getTime(slider) {
  let cards = document.querySelector(slider).children;
  for (let i = 0; i < cards.length; i++) {
    let value = cards[i].children[1].innerText;
    let city_ = value.split(' ');
    let hour_ = city_[0].split(':');
    let city_hour = hour_[0];
    let city_min = hour_[1];
    let ampm = city_[1];
    city_min++;
    // console.log(city_min);
    if (city_min == 60) {
      city_hour++;
      city_min = 0;
    }
    if (city_hour == 13) {
      city_min = 0;
      city_hour = 1;
    }
    if (city_hour > 11) {
      if (ampm == 'AM') ampm = 'PM';
    }
    cards[i].children[1].innerText =
      city_hour + ':' + ('0' + city_min).slice(-2) + ' ' + ampm;
  }
}
