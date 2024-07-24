const express = require('exrpess');
const app = express();

//for reading blob data
app.use(express.json());
app.use(express.urlencoded({extended:true}));