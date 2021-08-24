import { mydata } from './api.js';

export function sortContTemp() {
  let city_array = [];
  let tim;

  for (let key in mydata) {
    city_array.push(mydata[key]);
  }
  function DisplayContent() {
    document.getElementById('continent-container').innerHTML = '';
    for (let i = 0; i < 12; i++) {
      document.getElementById(
        'continent-container'
      ).innerHTML += `<li class="card_cont">
          <div class="cont_city_title">
              <div class="cont_name">${
                city_array[i].timeZone.split('/')[0]
              }</div>
              <div class="cont_temperature"> ${city_array[i].temperature}</div>
          </div>
          <div class="cont_content">
              <div class="cont_city">${
                city_array[i].cityName
              }, <span id="cont-time">${
        city_array[i].dateAndTime.split(',')[1].split(':')[0] +
        ':' +
        city_array[i].dateAndTime.split(',')[1].split(':')[1] +
        ' ' +
        city_array[i].dateAndTime.split(',')[1].split(':')[2].split(' ')[1]
      }</span></div>
              <div class="cont-humidity"><img class="humidity-icon" src=" assets/HTML & CSS/Weather Icons/humidityIcon.svg" alt="" > ${
                city_array[i].humidity
              }</div>
          </div>
      </li>`;
    }
    clearInterval(tim);
    tim = setInterval(() => {
      getTime('.flex_container');
    }, 60000);
  }

  function sortCities(a, b) {
    if (a.cityName < b.cityName) {
      return -1;
    } else if (a.cityName > b.cityName) {
      return 1;
    } else {
      return 0;
    }
  }
  function sortByContinent(a, b) {
    if (a.timeZone.split('/')[0] < b.timeZone.split('/')[0]) {
      return -1;
    } else if (a.timeZone.split('/')[0] > b.timeZone.split('/')[0]) {
      return 1;
    } else {
      return 0;
    }
  }

  function sortByTemperature(a, b) {
    if (+a.temperature.split('°')[0] < +b.temperature.split('°')[0]) {
      return -1;
    } else if (+a.temperature.split('°')[0] > +b.temperature.split('°')[0]) {
      return 1;
    } else {
      return 0;
    }
  }

  city_array.sort(sortCities);

  DisplayContent();

  let sort_cont = document.getElementById('sort-continent');
  let sort_temp = document.getElementById('sort-temperature');
  let sort_cont_icon = document.getElementById('icon-cont');
  let sort_temp_icon = document.getElementById('icon-temp');
  var t = 0,
    c = 0;

  sort_cont.addEventListener('click', sortContinent);

  function sortContinent() {
    c === '1' ? (c = '0') : (c = '1');
    sort_cont_icon.style.transform === 'rotate(180deg)'
      ? (sort_cont_icon.style.transform = 'rotate(-360deg)')
      : (sort_cont_icon.style.transform = 'rotate(180deg)');
    updateValues();
  }

  sort_temp.addEventListener('click', sortTemperature);
  function sortTemperature() {
    t === '1' ? (t = '0') : (t = '1');
    sort_temp_icon.style.transform === 'rotate(180deg)'
      ? (sort_temp_icon.style.transform = 'rotate(-360deg)')
      : (sort_temp_icon.style.transform = 'rotate(180deg)');
    updateValues();
  }

  //....................................Update values on the cards based on the sort..............................//

  function updateValues() {
    if (c == 1) {
      sort_cont.style.color = '#AAFF00';
      city_array.sort(sortByContinent);
      DisplayContent();
      if (t == 1) {
        sort_temp.style.color = '#AAFF00';
        city_array.sort(sortByContinent);
        city_array.sort((a, b) => {
          let cont1 = a.timeZone.split('/')[0];
          let cont2 = b.timeZone.split('/')[0];
          let cont1_temp = a.temperature.split('°')[0];
          let cont2_temp = b.temperature.split('°')[0];
          if (cont1 == cont2) {
            if (+cont1_temp > +cont2_temp) {
              return 1;
            } else if (+cont1_temp < +cont2_temp) {
              return -1;
            } else {
              return 0;
            }
          }
        });

        DisplayContent();
      } else {
        sort_temp.style.color = 'white';
        city_array.sort((a, b) => {
          let cont1 = a.timeZone.split('/')[0];
          let cont2 = b.timeZone.split('/')[0];
          let cont1_city = a.cityName;
          let cont2_city = b.cityName;
          if (cont1 == cont2) {
            if (cont1_city > cont2_city) {
              return 1;
            } else if (cont1_city < cont2_city) {
              return -1;
            } else {
              return 0;
            }
          }
        });
        DisplayContent();
      }
    } else {
      sort_cont.style.color = 'white';
      city_array.sort(sortCities);

      DisplayContent();

      if (t == 1) {
        sort_temp.style.color = '#AAFF00';
        city_array.sort(sortByTemperature);

        DisplayContent();
      } else {
        sort_temp.style.color = 'white';
      }
    }
    //
    //
  }
}

function getTime(slider) {
  let cards = document.querySelector(slider).children;

  for (let i = 0; i < cards.length; i++) {
    let value = cards[i].children[1].children[0].children[0].innerText;
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
    cards[i].children[1].children[0].children[0].innerText =
      city_hour + ':' + ('0' + city_min).slice(-2) + ' ' + ampm;
  }
}
