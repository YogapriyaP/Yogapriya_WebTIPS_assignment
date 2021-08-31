const express = require('express');
const bodyparser = require('body-parser');
const axios = require('axios');
let Data, citydata, hour;

async function fetchData() {
  return await axios.get('https://soliton.glitch.me/all-timezone-cities');
}
async function citydetail(city) {
  return await axios.get(`https://soliton.glitch.me?city=${city}`);
}

async function nextFourHours(cityDataTime, hour) {
  return await axios.post(`https://soliton.glitch.me/hourly-forecast`, {
    city_Date_Time_Name: cityDataTime,
    hours: hour,
  });
}

const app = express();
app.use(express.static(__dirname));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get('/data', function (req, res) {
  (async () => {
    Data = await fetchData();
    res.send(Data.data);
  })();
});

app.get('/hours/:city', function (req, res) {
  (async () => {
    citydata = await citydetail(req.params.city);
    res.send(citydata.data);
  })();
});

app.post('/nextfourhours', function (req, res) {
  (async () => {
    hour = await nextFourHours(req.body.city_Date_Time_Name, req.body.hours);
    res.send(hour.data);
  })();
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
