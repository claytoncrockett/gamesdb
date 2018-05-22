var express = require('express');
var router = express.Router();
var Game = require('../models').Game;

/* GET home page. */
router.get('/', function(req, res) {
    res.render('games');
});

module.exports = router;