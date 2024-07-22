/*📌Router : 

// const express = require('express');

// const app = express();

// //creating routing 
// app.get('/', function(req,res){
//     res.send('Champion mera anuj');
// })

// app.get('/profile', function(req,res){
//     res.send('championssssss uska coachfffff');
// })

// app.listen(3000);

*/


/*📌MiddleWares  :  */

const express = require('express');

const app = express();

app.use(function(req, res, next) {
    console.log("middleware chala");
    next(); // Ensure the next middleware or route handler is called
});

app.get('/', function(req, res) {
    res.send('Champion mera anuj');
    // No need for next() here
});

app.get('/about', function(req, res) {
    res.send('about page hai yeah');
    // No need for next() here
});

app.get('/profile', function(req, res,next) {
    res.send('about page hai yeah');
    // No need for next() here
    return next(new Error('Somthing went wrong'));
});


app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500).send('Something Broke')
})
app.listen(4000, function() {
    console.log('Server is running on port 4000');
});
