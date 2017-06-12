var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 1688;

app.get('/query', function (req, res) {
    var ret     = {};
    var name    = req.query.name;
    var ver     = req.query.ver;
    if ( ! name ) {
        res.status(400).send("Please specify 3p software name");
        return;
    }
    if ( ! ver ) {
        res.status(400).send("Please specify "+name+" ver");
        return;
    }
    ret[name]  = ver;
    res.send(ret);
});

var server  = app.listen(port, function() {
    console.log('todo List 3p vulnerability API server started on: '+ port);
});
