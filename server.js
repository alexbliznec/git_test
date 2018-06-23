const http = require(`http`);
const server = new http.server(function(req, res){
	res.writeHead = 200;
});
server.listen(8888, '127.0.0.1');