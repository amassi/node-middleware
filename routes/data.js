
/*
 * GET users listing.
 */

var http = require('http')

var options = {
  host: 'api.openweathermap.org',
  port: 80,
  path: '/data/2.1/find/name?q=Roma'
};

exports.get = function(req, res){
  

 http.get(options,function(response){
		//console.log("hi",response);
		//res.writeHead(200, {'Content-Type': 'application/json'});
		var pageData = "";
	    response.setEncoding('utf8');
	    //stream the data into the response
	    response.on('data', function (chunk) {
	      pageData += chunk;
	    });
 
	    //write the data at the end
	    response.on('end', function(){
		  var data_parse = JSON.parse(pageData);
		  
	      res.send(data_parse.list);
	      //res.end();
	    });
 
	});
};

exports.set = function(req, res){
		res.send("respond with a resource" + req.params.id); 
};