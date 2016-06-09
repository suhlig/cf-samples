var http = require('http');
var url = require('url');

HOST = null;

var host = "0.0.0.0";
var port = process.env.PORT || 3000;

var client_ip = function(req) {
    return (req.headers["X-Forwarded-For"] ||
            req.headers["x-forwarded-for"] ||
            '').split(',')[0] ||
           req.client.remoteAddress;
};

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello from a node app to');
    res.write(' ' + client_ip(req));
    res.end('</h1>');
}).listen(port, null);

console.log('Server running at port' + port + '.');
