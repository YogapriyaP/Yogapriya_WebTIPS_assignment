//..........................Importing the express,bodyparser and axios modules......................//
const express = require('express');
const bodyparser = require('body-parser');
const axios = require('axios');
const timeZone=require('./assets/Node JS/timeZone');
let Data, citydata, hour;



//..........................................Calling the express function...........................//

const app = express();

//.................................Middleware and bodyparsing...................................//
app.use(express.static(__dirname));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


//.........................GET method to fetch the data of the cities........................................//
app.get('/data', function (req, res) {
  Data=timeZone.allTimeZones();
  res.json(Data);
});


//..............................GET method to fetch the data for the selected city.................................//
app.get('/hours/:city', function (req, res) {
  citydata=timeZone.timeForOneCity(req.params.city);
  res.json(citydata);
});

//........................POST method to update the temperature data for next four hours............................//

app.post('/nextfourhours', function (req, res) {
  Data=timeZone.allTimeZones();
  hour=timeZone.nextNhoursWeather(req.body.city_Date_Time_Name,req.body.hours,Data);
  res.json(hour);
});


//..................................App listening at the port 3000...................................//
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
