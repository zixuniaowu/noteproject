const Deno = require('deno');
var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    if (req.method == 'POST') {
        var url_parse = url.parse(req.url, true);
        console.log(url_parse);
        res.end();
    }else if(req.method == 'GET') {
      console.log("hello word GET ");
    }else if(req.method == 'PUT') {
      console.log("hello word PUT");
    }else if(req.method == 'DELETE') {
      console.log("hello word DEL");
    }

}).listen(8080);