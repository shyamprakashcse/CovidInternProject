import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CovidserviceService {

  constructor(private http:HttpClient,private router:Router) { } 

  public covidIndiaData=[]   
  public covidStateData=[]
  private _covidIndiaURL="http://localhost:3000/api/covid-in" ; 
  private spinnerValue:boolean=false

   getCovidIndiaData(){
     this.http.get<any>(this._covidIndiaURL).subscribe((res)=>{
      this.covidIndiaData=res ; 
      console.log(this.covidIndiaData) 
      this.getStateData()
     },(err)=>{ 
            console.log(err)
     }); 
     return this.covidIndiaData;
  } 

  getStateData()
  {
    this.covidIndiaData.forEach(element => {
      if(element["Province"]=="Sikkim")
      {
        this.covidStateData.push(element)
      }
    });
  }
  

  setSpinnerModule(state:boolean){
    this.spinnerValue=state
  }

 
}
