const http = require('http');

const server = http.createServer(function(req,res){

    
    res.writeHead(200,{"content-type" : "text/html"});
    res.write("<h1>Project Started</h1>");
    res.write("<p>Nice Project...by rj</p>");
    res.end();

});
server.listen(3000 , ()=>console.log("Server started on port 3000"));
