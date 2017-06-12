'use strict';
var express = require('express');
var router  = express.Router();

router.use(function(req, res, next) {
    if ( ! req.query.name ) {
        res.status(400).send("Please specify 3p software name");
        return;
    }
    if ( ! req.query.ver ) {
        res.status(400).send("Please specify "+req.query.name+" ver");
        return;
    }
    next();
});

router.get('/', function (req, res) {
    var ret     = {};
    var name    = req.query.name;
    var ver     = req.query.ver;
    ret[name]  = ver;
    res.send(ret);
});

module.exports  = router;

