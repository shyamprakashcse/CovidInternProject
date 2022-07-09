import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../covidservice.service'; 
import { HttpClient } from '@angular/common/http';

import {  NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 stateWiseData=[]
 indiaData=[] 
  date = new Date();
  text:any;
  page:number=1; 
 
  
  constructor(private covid_server:CovidserviceService,private http:HttpClient,private spinner:NgxSpinnerService) { 
    
  }

  ngOnInit(): void {   

    //<ngx-spinner bdColor = "rgba(0, 0, 0, 0.8)" size = "large" color = "#0f1aec" type = "ball-climbing-dot" [fullScreen] = "true"><p style="color: white" > Loading... </p></ngx-spinner>
  this.spinner.show(undefined,{
    type: "ball-climbing-dot",
    color:'#0f1aec',
    size:'large',
    fullScreen:false,

    bdColor:'rgba(100,149,237,0.8)',

  });
    this.text=String(this.date) 
    this.text=this.text.split(" ");
   
    this.http.get<any>("http://localhost:3000/api/covid-in").subscribe((res)=>{
     this.indiaData=res  
     //console.log(res)
     this.setStateData(); 
     this.spinner.hide()
    
    },(err)=>{
      console.log(err);
    })

    

  }  
  setStateData(){
    this.indiaData.forEach(element => { 

      if(element["Province"]=="Tamil Nadu" && element["Date"][3]=="2"){
        this.stateWiseData.push(element)

      } 
    
      });  

      console.log(this.stateWiseData[0])

    }

 

}
