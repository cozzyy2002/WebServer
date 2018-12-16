// http://pgpg-sou.hatenablog.com/entry/2014/03/07/121846

var port = 443;
var ip = '127.0.0.1';

var util = require('util');
var https = require('https');
var fs = require('fs');
var options = {
	passphrase: 'yano',
	key: fs.readFileSync('../ssl/multi.test.com.key'),
	cert: fs.readFileSync('../ssl/multi.test.com.crt'),
};
https.createServer(options, function(req,res) {
	console.log("Responding %s", req.headers.host);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	var body = util.format('<html><body><h2>I am %s</h2></body></html>',
							req.headers.host);
	res.end(body);
}).listen(port, ip);

console.log("Server running at https://%s:%d", ip, port);

