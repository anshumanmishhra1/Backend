const http = require('http');

const port = 3000;
var server = http.createServer(function(req,res){
    res.end("chal raha hai")
    console.log(`server is running at ${port}`)
})

server.listen(port);