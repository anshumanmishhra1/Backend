# 📍Understanding Node.js Basics : 
    it's neither a programming language nor a technology also not a framework and library, It is JavaScript runtime enviornment.

    👉We can't create backend from javaScript as JavaScript didn't have any functionalities like that.

    👉 Ryan Dahl thinks to create Backend with JavaScript so he is playing with the V8 engine of Google Chrome as it is Open Source. As V8 engine is made of C++ so he think to do it in JavaScript

    👉 Ryan Dahl create wrapper over the C++ code it means javaScript is wrapped over V8 engine code, It means We write the code in JavaScript and Wrapper receives it and create a Server with the help of C++.

    👉Node.js is javaScript runtime environment 


# 📍Node.js and npm -> 

    👉npm stands for node package manager where we can find all packages of node related and others.

    👉Node js core mein jo install ata hai wo kehlata hai modules and jo npm se download krte hai usey kahte hai package

    👉For example if i want to make an app for the blind, so we have to use 'text-to-speech' package which google has already done it for us.

    npm is place where people upload their own packages and others can use it as per their needs.

    📌Insatlling and Unistalling anythings basics and advanced
    👉 npm i packagename  -> for installing
    👉npm uninstall packagename -> for uninstalling
    👉npm i accessibility@3.0.9 -> for downloading particular version
# 📍npm init -> 
    👉package.json (lekha jokha of the project)

    👉const fs = require('fs'); it means we have the power of 'fs' in our varibale fs

    👉fs.writeFile is used to create a new file and data into it

    👉fs.rename is used to rename the files

    👉fs.readFile is used to read a file

    👉fs.copyFile is used to copy files from one    folder to another. 

    👉fs.unlink is used to remove any files

# 📌Understanding HTTP Modules 

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


# 📍Express.js Framework : 

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

        👉