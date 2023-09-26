const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const express = require("express");


const app = express();
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/css", express.static(__dirname+"/public/css"));
app.use("/images", express.static(__dirname+"/public/images"));

const path= require("path");
app.get("/", function(req,res){
  res.sendFile(__dirname +"/public/views/index.html");
});

app.listen(9000, function(req,res){
  console.log("App running");
});
