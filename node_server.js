//..........................Importing the express,bodyparser and axios modules......................//
const express = require('express');
const bodyparser = require('body-parser');
const axios = require('axios');
let Data, citydata, hour;


//...................................Function to fetch the data of the cities...........................................//

async function fetchData() {
  return await axios.get('https://soliton.glitch.me/all-timezone-cities');
}

//..................................Function to get the city details..........................................//

async function citydetail(city) {
  return await axios.get(`https://soliton.glitch.me?city=${city}`);
}

//.................................Function to get the temperature for next four hours..................................//

async function nextFourHours(cityDataTime, hour) {
  return await axios.post(`https://soliton.glitch.me/hourly-forecast`, {
    city_Date_Time_Name: cityDataTime,
    hours: hour,
  });
}

//..........................................Calling the express function...........................//

const app = express();

//.................................Middleware and bodyparsing...................................//
app.use(express.static(__dirname));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


//.........................GET method to fetch the data of the cities........................................//
app.get('/data', function (req, res) {
  (async () => {
    Data = await fetchData();
    res.send(Data.data);
  })();
});

//..............................GET method to fetch the data for the selected city.................................//
app.get('/hours/:city', function (req, res) {
  (async () => {
    citydata = await citydetail(req.params.city);
    res.send(citydata.data);
  })();
});

//........................POST method to update the temperature data for next four hours............................//

app.post('/nextfourhours', function (req, res) {
  (async () => {
    hour = await nextFourHours(req.body.city_Date_Time_Name, req.body.hours);
    res.send(hour.data);
  })();
});


//..................................App listening at the port 3000...................................//
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
