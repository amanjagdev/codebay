const express = require('express');
const engine = require('consolidate');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('views'));
app.engine('html', engine.mustache);
app.set('view engine', 'html');

//MAIN ROUTES : 
//Main Page
app.get('/',(req ,res) => {
    res.render('index');
});

//Test Route
app.get('/test',(req ,res) => {
    res.render('test');
});

//About
app.get('/about',(req ,res) => {
    res.render('about');
});

//Btech Route
app.get('/btech',(req ,res) => {
    res.render('btech');
});



//BTECH ALLL ROUTES : 
//Btech -- Isem
app.get('/btech/ISem',(req ,res) => {
    res.render('onesem');
});
//Btech -- IIsem
app.get('/btech/IISem',(req ,res) => {
    res.render('twosem');
});
//Btech -- IIIsem
app.get('/btech/IIISem',(req ,res) => {
    res.render('threesem');
});
//Btech -- IVsem
app.get('/btech/IVSem',(req ,res) => {
    res.render('foursem');
});
//Btech -- Vsem
app.get('/btech/VSem',(req ,res) => {
    res.render('fivesem');
});
//Btech -- VIsem
app.get('/btech/VISem',(req ,res) => {
    res.render('sixsem');
});
//Btech -- VIIsem
app.get('/btech/VIISem',(req ,res) => {
    res.render('sevensem');
});
//Btech -- VIIIsem
app.get('/btech/VIIISem',(req ,res) => {
    res.render('eightsem');
});


//3rd SEM ALL ROUTES :
//Btech -- IIIsem -- ds
app.get('/btech/IIISem/ds',(req ,res) => {
    res.render('ds');
}); 
//Btech -- IIIsem -- oop
app.get('/btech/IIISem/oop',(req ,res) => {
    res.render('oop');
}); 
//Btech -- IIIsem -- dbms
app.get('/btech/IIISem/dbms',(req ,res) => {
    res.render('dbms');
}); 
//Btech -- IIIsem -- py
app.get('/btech/IIISem/py',(req ,res) => {
    res.render('py');
}); 

//Initialising Server
app.listen(port,() => console.log(`Listening on ${port}`));