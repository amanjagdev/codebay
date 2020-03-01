const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/views/about.html'));
});

router.get('/btech',function(req,res){
    res.sendFile(path.join(__dirname+'/views/btech.html'));
});

//add the router
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/views/js'));
app.use(express.static(__dirname + '/views/css'));
app.use(express.static(__dirname + '/views/fonts'));
app.use(express.static(__dirname + '/views/img'));


app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');