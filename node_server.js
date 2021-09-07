//..........................Importing the express,bodyparser and axios modules......................//
const express = require('express');
const childProcess = require('child_process');

//..........................................Calling the express function...........................//

const app = express();

//.................................Middleware and bodyparsing...................................//
app.use(express.static(__dirname));
app.use(express.json());

//.........................GET method to fetch the data of the cities........................................//
app.get('/data', function (req, res) {
  console.log('data');
  let cityObj = { functionName: 'cityData' };
  let child_city = childProcess.fork('./childProcess/childProcess.js');
  child_city.send(cityObj);
  child_city.on('message', (data) => {
    res.send(data);
  });
});

//..............................GET method to fetch the data for the selected city.................................//
app.get('/hours/:city', function (req, res) {
  const cityObj = {
    functionName: 'getTimeForOneCity',
    cityName: `${req.params.city}`,
  };
  let child_oneCity = childProcess.fork('./childProcess/childProcess.js');
  child_oneCity.send(cityObj);
  child_oneCity.on('message', (data) => {
    res.send(data);
  });
});

//........................POST method to update the temperature data for next four hours............................//

app.post('/nextfourhours', function (req, res) {
  const NHoursObj = {
    functionName: 'getFourHoursWeather',
    CDTN: `${req.body.city_Date_Time_Name}`,
    hours: `${req.body.hours}`,
  };
  let child_Nhours = childProcess.fork('./childProcess/childProcess.js');
  child_Nhours.send(NHoursObj);
  child_Nhours.on('message', (data) => {
    res.send(data);
  });
});

//..................................App listening at the port 3000...................................//
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
