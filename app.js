var express = require('express');
var app = express();

//Appelle des commandes
var ls = require('./command/ls');


//Définition des commandes
app.use('/ls', ls);
