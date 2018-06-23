const url = require('url');
const log = require('winston');

module.exports = function (req, res){
    const urlParsed = url.parse(req.url, true);

    log.info("Got Request", req.method, req.url);

    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message) {
        const message = url.query.message;
        debug("Echo:" + message);
        res.end(message);
        return;
    }
    log.error("Unknown URL");

    res.statusCode = 404;
    res.end('Not Found');
}