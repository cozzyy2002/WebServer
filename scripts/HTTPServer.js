// http://pgpg-sou.hatenablog.com/entry/2014/03/07/121846

var port = 443;
var ip = '127.0.0.1';

var https = require('https');
var fs = require('fs');
var options = {
	passphrase: 'yano',
	key: fs.readFileSync('../ssl/multi.test.com.key'),
	cert: fs.readFileSync('../ssl/multi.test.com.crt'),
};
https.createServer(options, function(req,res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World\n');
}).listen(port, ip);

console.log("Server running at https://%s:%d", ip, port);

