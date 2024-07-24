const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/profile/:username', function(req,res){
    res.send(`Welcome!,${req.params.username}`);
})

app.get('/author/:username/:age', function(req,res){
    res.send(`Ok!,${req.params.username} of age ${req.params.age}`);
    
})
app.listen(port, function () {
    console.log(`it's running at ${port}`);
});
 