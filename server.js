var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');
app.use('/static', express.static('static'))

app.get('/', function(req, res){
    res.render('first-template', {
        
    });
});

app.get('/auth/google', function(req, res){
    res.render('photo', {
        
    });
});


app.listen(3000);
