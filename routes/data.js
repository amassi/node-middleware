
/*
 *  Configuration external API overt HTTPP 
 */

var http = require('http')

var options = {
  host: 'localhost',
  port: 3000,
  path: '/store'
};

exports.findAll = function(req, res){
	http.get(options,function(response){
		//console.log("hi",response);
		//res.writeHead(200, {'Content-Type': 'application/json'});
		var pageData = "";
	    response.setEncoding('utf8');
	    //stream the data into the response
	    response.on('data', function (chunk) {
	      pageData += chunk;
	    });
	    response.on('end', function(){
		  var data_parse = JSON.parse(pageData);
	      //res.send(data_parse.list);
		  res.jsonp(data_parse.places);
	    });

	});
  
};
exports.findById = function(req, res){
	http.get(options,function(response){
		//console.log("hi",response);
		//res.writeHead(200, {'Content-Type': 'application/json'});
		var pageData = "";
	    response.setEncoding('utf8');
	    //stream the data into the response
	    response.on('data', function (chunk) {
	      pageData += chunk;
	    });
	    response.on('end', function(){
		  var data_parse = JSON.parse(pageData);
	      //res.send(data_parse.list);
		  res.jsonp(data_parse.places[req.params.id]);
	    });

	}); 
};

exports.add = function(req, res){
		res.send("respond with a resource" + req.params.id); 
};

exports.update = function(req, res){
		res.send("respond with a resource" + req.params.id); 
};

exports.delete = function(req, res){
		res.send("respond with a resource" + req.params.id); 
};
