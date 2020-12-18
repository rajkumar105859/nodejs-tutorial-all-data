const fs = require('fs');
console.log("File opened success");

// async file read function
// fs.readFile(__dirname+"/hello.txt", "utf8" ,(err,data)=>{
//     if(err) throw err
//     console.log(data);
// })


// sync file open function

try{
    const data = fs.readFileSync(__dirname+"/hello.txt" , "utf-8" );
    
        console.log(data);
    

}catch(e){
    console.log(e);
}

console.log("File ended successfully");