//Importing packages
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


//Home Page
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

//About Page
router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/views/about.html'));
});

//Btech Route
router.get('/btech',function(req,res){
    res.sendFile(path.join(__dirname+'/views/btech.html'));
});



//ALL BTECH ROUTES
////Btech -- Isem
router.get('/btech/ISem',function(req,res){
    res.sendFile(path.join(__dirname+'/views/onesem.html'));
});
////Btech -- IIsem
router.get('/btech/IISem',function(req,res){
    res.sendFile(path.join(__dirname+'/views/twosem.html'));
});
////Btech -- IIIsem
router.get('/btech/IIISem',function(req,res){
    res.sendFile(path.join(__dirname+'/views/threesem.html'));
});
////Btech -- IVsem
router.get('/btech/IVSem',function(req,res){
    res.sendFile(path.join(__dirname+'/views/foursem.html'));
});
////Btech -- Vsem
router.get('/btech/VSem',function(req,res){
    res.sendFile(path.join(__dirname+'/views/fivesem.html'));
});
////Btech -- VIsem
router.get('/btech/VISem',function(req,res){
    res.sendFile(path.join(__dirname+'/views/sixsem.html'));
});
////Btech -- VIIsem
router.get('/btech/VIISem',function(req,res){
    res.sendFile(path.join(__dirname+'/views/sevensem.html'));
});
////Btech -- VIIIsem
router.get('/btech/VIIISem',function(req,res){
    res.sendFile(path.join(__dirname+'/views/eightsem.html'));
});



//3rd SEM ALL ROUTES :
//Btech -- IIIsem -- ds
router.get('/btech/IIISem',function(req,res){
    res.sendFile(path.join(__dirname+'/views/threesem.html'));
});





// BASIC SETUP
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/views/js'));
app.use(express.static(__dirname + '/views/css'));
app.use(express.static(__dirname + '/views/fonts'));
app.use(express.static(__dirname + '/views/img'));


app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');