let http = require('http');
let url = require('url');

let sever = http.createServer(function(req, res) {
    let parseUrl = url.parse(req.url, true);
    let queryStringObject = parseUrl.query;
    res.end('Hello Node Js');
    console.log('Done');
})

sever.listen(3000, function(){
    console.log('the sever is listening on port 3000 now');
})