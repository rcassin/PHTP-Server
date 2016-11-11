/**
 * Created by ldesp on 11/11/2016.
 */
var express = require('express');

var router = express.Router();

router.use(function log(req, res, next) {
    console.log('LS: ', Date.now());
    next();
});

router.get('/', function(req, res) {
    res.send('ls');
});

module.exports = router;