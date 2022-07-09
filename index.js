// import or declaration 

const express= require('express') 
const bodyParser=require('body-parser') 
const cors=require('cors') 
const ejs=require('ejs')  
const fs=require('fs') 
const path=require('path') 
const queryString=require('querystring') 

// internal Imports 
const router=require('./Routes/router') 
const covid=require('./Controllers/covid')






//Express Instantiation  
const app=express()  

// instantiation 

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 
app.use(cors()) 
app.use("/api", router);


// server instantiation 

app.listen(3000,(req,res)=>{
    console.log("server is started and running at port no 3000"); 
}) 

// indian data 
