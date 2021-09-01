// .............................................Importing Modules............................................................//
var http = require('http');
var fs = require('fs');
var path = require('path');
const timeZone=require('./assets/Node JS/timeZone');
let Data,citydetails,hour;

// .....................................................Creating Server.................................................//
const options={
  hostname: 'localhost',
  port: 3000,
  path: '/data',
  method: 'GET'
}

http.request(options,function(req,res)
{
    Data=timeZone.allTimeZones();
    res.json(Data);
    console.log(Data);
});

http
  .createServer(function (request, response) {
    console.log('request starting...');

    //.................................................Configuring file path...............................................//

    var filePath = '.' + request.url;
    if (filePath == './') filePath = './index.html';
    if (filePath == './assets/')
      filePath = './assets/HTML & CSS/Icons for cities/';

    //.......................................................Configuring contenttype.........................................//

    var extname = path.extname(filePath);
    console.log(extname);
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
       for(let i=0;i<filePath.length;i++)
       {
         filePath.replace('%20',' ');
         console.log(filePath);
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
