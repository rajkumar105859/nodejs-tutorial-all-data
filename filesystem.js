const fs = require('fs');
const http = require('http');



const server = http.createServer(function(req,res){
    fs.readFile(__dirname+"/hello.txt" , "utf8" , (err,data)=>{
        if(err){
            throw err;
        }
        res.write(data);
        res.end();
        
     
    })

})

server.listen(3000,()=>console.log("Server created"))


// fs.unlink(__dirname+"/hello.txt" , (err,data)=>{
//     if(err) throw err
//     console.log("File deleted");
//     console.log(data);
// })