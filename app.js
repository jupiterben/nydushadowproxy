var pr = require('child_process');
var http = require('http');
var os = require('os');


var getIp = function(){    
    var interfaces = os.networkInterfaces();
    var IPv4 = '127.0.0.1';
    for (var key in interfaces) {
     // var alias = 0;
      interfaces[key].forEach(function(details){
        if (details.family == 'IPv4' && details.internal == false ) {
            IPv4 = details.address;
        }
      });
    }
    return IPv4;
}

var sCmd = 'REG QUERY "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings"  /v AutoConfigURL';

var httpServer = http.createServer(function(req,res)
{
	pr.exec(sCmd, function(error, stdout, stderr)
	{
		var str = stdout.split(' ').pop();
		var address = str.replace('127.0.0.1', getIp() );
		console.log("redirect to " + address);
		res.writeHead(302, {'Location': address } );
        res.end();
	});
});

var port = 8080;
httpServer.listen(port);
console.log("listen on " + port);