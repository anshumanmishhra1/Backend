const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
app.use(cookieParser());


// app.get('/',(req,res)=>{
//     res.cookie("name","anshuman");
//     res.send("done");
// });

// app.get('/read', function (req,res){
//     console.log(req.cookies);
//     res.send("read page");
// });


//📌Understanding bcrypyt


// encrypting  : 
// app.get('/', function (req,res){
//     bcrypt.genSalt(10, function(err,salt){
//         bcrypt.hash("pololololooo",salt,function(err,hash){
//             //store hash in yur passwrod
//             console.log(hash);
//         })
//     })
// });

//decrypting : 

// app.get('/', function (req,res){
//     bcrypt.compare("pololololoo","$2b$10$J.ExyABugXvT8g41GLPTGu3jO4fb06hhh.QqLA60M6ryihY.r.eQG", function(err,result){
//         console.log(result);
//     })
// });


//jwt : 

app.get('/', function (req,res){
    let token = jwt.sign({email: "harsh@example.con"}, "secret");
    
    res.cookie("token",token);
    res.send('done');
});

app.get('/read',function(req,res){
    let data = jwt.verify(req.cookies.token,"secret");
    console.log(data);
})

app.listen(3000);