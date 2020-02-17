const express = require('express');
const engine = require('consolidate');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('views'));
app.engine('html', engine.mustache);
app.set('view engine', 'html');

app.get('/',(req ,res) => {
    res.render('index');
});

app.get('/test',(req ,res) => {
    res.render('test');
});

//Initialising Server
app.listen(port,() => console.log(`Listening on ${port}`));