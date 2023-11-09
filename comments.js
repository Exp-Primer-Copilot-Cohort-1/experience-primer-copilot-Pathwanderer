// Create web server
var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

// Set up body parser
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Set up mongoDB
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";