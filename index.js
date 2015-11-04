var app = require('./server.js');

//var port = 4568;
//app.set('port', (process.env.PORT || 4568));

var port = process.env.PORT || 4568;

app.listen(port);

console.log('Server now listening on port ' + port);


/* Google searching for solution to auto set the port. From the Digital
 Ocean site */
//var http = require('http');
//http.createServer(function(req, res){
//  res.writeHead(200, {'Content-Type': 'text/plain'});
//  res.end('Hello World\n');
//}).listen(process.env.PORT, process.env.IP);


/* Google searching for solution to auto set the port */

//var cool = require('cool-ascii-faces');
//var express = require('express');
//var app = express();
//
//app.set('port', (process.env.PORT || 5000));
//
//app.use(express.static(__dirname + '/public'));
//
//// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');
//
//app.get('/', function(request, response){
//  response.render('pages/index')
//});
//
//app.get('/cool', function(request, response){
//  response.send(cool());
//});
//
//app.listen(app.get('port'), function(){
//  console.log('Node app is running on port', app.get('port'));
//});*/
