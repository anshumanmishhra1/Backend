# 📍Understanding Node.js Basics : 
    it's neither a programming language nor a technology also not a framework and library, It is JavaScript runtime enviornment.

    👉We can't create backend from javaScript as JavaScript didn't have any functionalities like that.

    👉 Ryan Dahl thinks to create Backend with JavaScript so he is playing with the V8 engine of Google Chrome as it is Open Source. As V8 engine is made of C++ so he think to do it in JavaScript

    👉 Ryan Dahl create wrapper over the C++ code it means javaScript is wrapped over V8 engine code, It means We write the code in JavaScript and Wrapper receives it and create a Server with the help of C++.

    👉Node.js is javaScript runtime environment 


📍Node.js and npm -> 

    👉npm stands for node package manager where we can find all packages of node related and others.

    👉Node js core mein jo install ata hai wo kehlata hai modules and jo npm se download krte hai usey kahte hai package

    👉For example if i want to make an app for the blind, so we have to use 'text-to-speech' package which google has already done it for us.

    npm is place where people upload their own packages and others can use it as per their needs.

    📌Insatlling and Unistalling anythings basics and advanced
    👉 npm i packagename  -> for installing
    👉npm uninstall packagename -> for uninstalling
    👉npm i accessibility@3.0.9 -> for downloading particular version
📍npm init -> 
    👉package.json (lekha jokha of the project)

    👉const fs = require('fs'); it means we have the power of 'fs' in our varibale fs

    👉fs.writeFile is used to create a new file and data into it

    👉fs.rename is used to rename the files

    👉fs.readFile is used to read a file

    👉fs.copyFile is used to copy files from one    folder to another. 

    👉fs.unlink is used to remove any files

 📌Understanding HTTP Modules 

    👉 There are some rules and regulation on the Internet and are pre-installed in the software of your Operating System.

    👉 Windows, Linux, MacOs are helping the software who supports for the following of these rules and regulation.

    👉 HTTP is also a protocol or rule without it's rules you can't even send or receive on the internet. If i don't use HTTP protocol then you can say you can't use internet(there are also many reasons but you can say it is one of them).


    👉 const http = require('http'); this method is used to access the HTTP protocol or you can make your own server using it.

    👉 Here is the Method of Creation of server 
                /*
                const http = require('http');

                var server = http.createServer(function(req,res){
                    res.end("chal raha hai")
                })

                server.listen(3000);
                */

    ➡️ How Client Communicate with Servers ?
        🔖How we create Requests : 
            Get -> Kuch server se laao
            post -> Creation (such as you comment on Instagram)
            put -> it updates the whole
            patch -> Data is already saved, but you have done somemistakes so you have to correct this(means updation of specific part)

    ➡️ HTTP Status Codes : 
        1XX -> It means server has accepted the request
        101 -> It means we redirect to the other port that is required for the requests
        200 -> It means Successfuly response has been given (status sahi hai) also called 'Ok Status'
        201 -> It means something has been created on the Server.
        202 -> It means we give some work and has been processing if any error will be find will be noticed
        203 -> It has forwarded to any third party application. 
📌Dependencies and Dev-Dependencies : 
    👉 Dependency means packages and their dependency.
    
    👉DevDependencies means the packages which only will help in the development and when our project is completed then we aren't using these packages.


📍Express.js Framework : 

    📌Introduction to Express.js : 
        Expresss js is a npm package and it's a framework(framework means it gives a flow how to do any work or task). Express.js manage everything from receiving the request and giving the response.

    🔖Way of putting Libray 
        1. In terminal type npm i express
        2. const express = require('express');

    📌Routing : It is nothing but '/'(it is called home or root i think ) or what we add after '/'. "domains k bad sb kuch routes hai"

        /*
            const express = require('express');

            const app = express();

            //creating routing 
            app.get('/', function(req,res){
                res.send('Champion mera anuj');
            });

            app.get('/profile', function(req,res){
                res.send('championssssss uska coachfffff');
            });

            app.listen(3000);

        */

    📌 MiddleWare : 

        👉 it is attached just before the routes. We can do any work before routing and this is the work of middleware.

        for example : We send a request to a server, server recieves the request now we have a two options. Number 1 is that it directly goes to the destination, Number 2 is that first it will do some work like printing and the then reach the destination.

 📍Form Handling and Working with the forms 

    📌Session And Cookies -> we can put any data on frontend and browser and when we try to request on backend then data saved on the frontend automatically went to the backend. And the thing which is saved on the fronend is known as cookies. If you logged out then we say session is over

    👉You send plain text to the server but backend received as a 'blob; and now we have to handle such that we can read.

        app.use(express.json());
        app.use(express.urlencoded({extended:true}));
    

    📍Dynamic Routing : We genrally see some routes where only one part change such as /author/harsh, /author/hanshika, /author/hashika, here we can see some part is similar i.e 'author'


📍Data Storage (MongoDb or Mongoose) 

    👉 Data storage is a place where we dave the info of the users.

    👉 we can write some thing in .txt file but can't put anythin like images, videos so for this problem Database come to the center.

    📌SQL : Putting the data in the form of tables. Here we read about NoSQL in which there is no tables here there is data is stored in the form of objects.

    👉 Here NoSQL is a concept in which we learn about MongoDb

    👉 There are two server in the backend i.e application server and database server. 
    
        🤜 Application server are those who helps in router and getting request(login, logout).

        🤜 Database server

        CODE                DATABASE
        ---------------------------------- 
        mongoose.connect -> databse create
        model create     -> collection
        CREATE           ->  Document


📌CRUD Operation through routes
        const express = require('express');
        const app = express();
        const port  = 5000;
        const userModel = require('./usermodel');

        app.get('/',(req,res)=>{
            res.send("hey")
        })

        //👉for Creating Users
        app.get('/create',async (req,res)=>{
            let createduser = await userModel.create({
                name : "Harsh",
                email : 'anshuman@gmail.com',
                username : "Harsh Sharma"
            })
            
            res.send(createduser);
            
        })

        //👉for Updating Users
        app.get('/update',async (req,res)=>{
        let updateduser = await userModel.findOneAndUpdate({username:"anshumanmishhra"},{name:"Anshuman Mishra"},{new:true})
            
            res.send(updateduser);
            
        })

        //👉for Deleting Users
        app.get('/delete',async (req,res)=>{
        let users = await userModel.findOneAndDelete({username:"anshumanmishhra"})
            
            res.send(users);
            
        })

        //👉for Reading Users
        app.get('/read', async (req,res)=>{
            let users = await userModel.find();
            res.send(users)
        })

        app.listen(port,()=>{
            console.log(`server started at ${port}`);
        });


# 📍Authentication and Authorization

    👉 Before giving profile to the user it is neccesary to check who is the user. it is knowns as Authentication 

    👉 I have proven my identity, and I want to change something in the database, so we check if the user has admin right or not, so we can say that the user is not authorised for this task. it is known as Authorization

    👉 server often forget that who are you so server will ask for each task who are you? for this cookies and session come forward to solve this problem

    🔖we have to learn about three things : 
        1. Cookie kaise set karte hai and read krte hai :
            app.get('/',(req,res)=>{
                res.cookie("name","anshuman");
                res.send("done");
            });

            app.get('/read', function (req,res){
                console.log(req.cookies);
                res.send("read page");
            });

        2. bcrypt kaise use krte hai for password encryption and decryption : 

            encrypting  : 
                app.get('/', function (req,res){
                    bcrypt.genSalt(10, function(err,salt){
                        bcrypt.hash("pololololooo",salt,function(err,hash){
                            //store hash in yur passwrod
                            console.log(hash);
                        })
                    })
                });
            
            decrypting : 
                app.get('/', function (req,res){
                        bcrypt.compare("pololololoo","$2b$10$J.ExyABugXvT8g41GLPTGu3jO4fb06hhh.QqLA60M6ryihY.r.eQG", function(err,result){
                        console.log(result);
                    })
                });



        3. jwt kya hai and jwt mein data kaise store karein aur bahar nikale 

        👉JWT is made of three things 
                //jwt : 

                    app.get('/', function (req,res){
                        let token = jwt.sign({email: "harsh@example.con"}, "secret");
                        res.cookie("token",token);
                        res.send('done');
                    });

                    //for verification : 
                    app.get('/read',function(req,res){
                        let data = jwt.verify(req.cookies.token,"secret");
                        console.log(data);
                    })






