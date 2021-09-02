// .............................................Importing Modules............................................................//
var http = require('http');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
const timeZone = require('./assets/Node JS/timeZone');
let cityDetails, cityObjects;

// .....................................................Creating Server.................................................//

http
  .createServer(function (request, response) {
    //.................................................Configuring file path...............................................//
    // console.log(request.method);
    if (request.method == 'GET') {
      if (request.url == '/data') {
        response.write(JSON.stringify(timeZone.allTimeZones()), 'utf-8', () => {
          console.log('Writing string Data...');
        });
        response.end();
      }
      cityObjects = timeZone.allTimeZones();
      for (let k in cityObjects) {
        let city = cityObjects[k].cityName;
        if (request.url == `/hours/${city}`) {
          response.write(
            JSON.stringify(timeZone.timeForOneCity(city)),
            'utf-8',
            () => {
              console.log('Writing string Data...');
            }
          );
          response.end();
          cityDetails = timeZone.timeForOneCity(city);
        }
      }
    }

    if (request.method == 'POST') {
      if (request.url == '/nextfourhours') {
        response.write(
          JSON.stringify(
            timeZone.nextNhoursWeather(
              cityDetails.city_Date_Time_Name,
              4,
              cityObjects
            )
          ),
          'utf-8',
          () => {
            console.log('Writing string Data...');
          }
        );
response.end();
      }
    }

    var filePath = '.' + request.url;
    if (filePath == './') filePath = './index.html';

    //.......................................................Configuring contenttype.........................................//

    var extname = path.extname(filePath);

    var contentType = 'text/html';
    switch (extname) {
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.css':
        contentType = 'text/css';
        break;
      case '.json':
        contentType = 'application/json';
        break;
      case '.png':
        contentType = 'image/png';
        break;
      case '.svg':
        contentType = 'image/svg+xml';
        filePath.toString();
        for (let i = 0; i < 10; i++) {
          filePath = filePath.replace('%20', ' ');
        }
        break;
      case '.jpg':
        contentType = 'image/jpg';
        break;
    }

    //.....................................................Reading file from the path.........................................//

    fs.readFile(filePath, function (error, content) {
      if (error) {
        if (error.code == 'ENOENT') {
          fs.readFile('./404.html', function (error, content) {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
          });
        } else {
          response.writeHead(500);
          response.end('Sorry, Error Occured !!!' + error.code + ' ..\n');
          response.end();
        }
      } else {
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content, 'utf-8');
      }
    });
  })
  //...................................................Server listening on port 3000.........................................//
  .listen(3000);
console.log('Server running at http://localhost:3000/');
