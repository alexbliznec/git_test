const http = require('http');
const server = new http.Server(function(req, res){

}).listen(8888);

setTimeout(function(){
    server.close();
}, 4000);