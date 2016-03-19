var express = require('express'),
app = express(),
routes = require('./app/routes');



routes(app);


app.listen(3000, function () {
    console.log('demo app listening on port 3000!');
});