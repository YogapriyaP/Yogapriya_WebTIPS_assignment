const event = require('events');
const eventEmitter = new event.EventEmitter();

//..................Import the published module 'timezone-weather' using require..................//
const timeZone = require('timezone-weather');

//..........................function to get weather data for all timezones...............................//

function cityData() {
  const Data = timeZone.allTimeZones();
  process.send(Data);
  process.exit();
}

//..............................function to get time for one city................................................//
function getTimeForOneCity(city) {
  const cityDetails = timeZone.timeForOneCity(city);
  process.send(cityDetails);
  process.exit();
}

//............................function to get weather data for next N hours.............................//

function getFourHoursWeather(cdtn, hours) {
  Data = timeZone.allTimeZones();
  hour = timeZone.nextNhoursWeather(cdtn, hours, Data);
  process.send(hour);
  process.exit();
}

//..................................Binding the event with the event handler.................................//
eventEmitter.on('cityData', (func_data) => {
  cityData(func_data);
});
eventEmitter.on('getTimeForOneCity', (func_data) => {
  getTimeForOneCity(func_data.cityName);
});
eventEmitter.on('getFourHoursWeather', (func_data) => {
  getFourHoursWeather(func_data.CDTN, func_data.hours);
});


//.................................Firing event using emit function.............................................//

process.on('message', (data) => {
  eventEmitter.emit(data.functionName, data);
});
