// const fs = require('fs');

// fs.writeFile("hey.text","hey khello kaise ho",function(err){
//     if(err)console.error(err);
//     else console.log("done");
// })


// fs.appendFile("hey.text","mai to accha hu apna batao",function(err){
//     if(err)console.error(err);
//     else console.log("done");
// })



// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// });


// fs.copyFile("hello.txt","/copy2/copy-1.txt", function(err){
//     if(err)console.error(err.message);
//     else console.log("done");
// })

// fs.unlink("hey.txt",function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

const http = require('http');

const server = http.createServer(function(req,res){
    res.end("hello world");

});

server.listen(3000);