// import and initialization 
const express=require('express') 
const route=express.Router() 
const request=require('request')  

// controllers import 
const covid=require('../Controllers/covid') 

// router configuration and redirection 
route.get('/covid-in',covid.covidIndia);

// exporting the router module  


module.exports=route