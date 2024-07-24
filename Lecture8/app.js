const express = require('express');
const app = express();
const port  = 5000;
const userModel = require('./usermodel');

app.get('/',(req,res)=>{
    res.send("hey")
})

app.get('/create',async (req,res)=>{
    let createduser = await userModel.create({
        name : "Harsh",
        email : 'anshuman@gmail.com',
        username : "Harsh Sharma"
    })
    
    res.send(createduser);
    
})
app.get('/update',async (req,res)=>{
   let updateduser = await userModel.findOneAndUpdate({username:"anshumanmishhra"},{name:"Anshuman Mishra"},{new:true})
    
    res.send(updateduser);
    
})
app.get('/delete',async (req,res)=>{
   let users = await userModel.findOneAndDelete({username:"anshumanmishhra"})
    
    res.send(users);
    
})

app.get('/read', async (req,res)=>{
    let users = await userModel.find();
    res.send(users)
})

app.listen(port,()=>{
    console.log(`server started at ${port}`);
});