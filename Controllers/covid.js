const express=require('express') 
const request=require('request') 
const bodyParser=require('body-parser') 


// instantiation 

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));  

// variables initialization 
covidData=[]

// controllers 
const covidIndia=(req,res)=>{
    request('https://api.covid19api.com/live/country/india',(err,resp,body)=>{
        if(!err && resp.statusCode==200)
        { 
            covidData=body 
          
           
            res.status(200).send(body)
        } 
        else{
            res.send(err)
        }
    })
}


//exporters 

module.exports={covidIndia,covidData}