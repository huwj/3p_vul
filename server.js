var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 1688;

var query = require('./routes/query');

app.use('/query', query);

var server  = app.listen(port, function() {
    console.log('todo List 3p vulnerability API server started on: '+ port);
});
