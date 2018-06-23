const http = require(`http`);
const server = http.createServer();

server.on('request', require('/request'));

server.listen(8888, '127.0.0.1');

console.log('server is running');