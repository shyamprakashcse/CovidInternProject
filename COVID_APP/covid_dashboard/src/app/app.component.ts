import { Component } from '@angular/core';
import { CovidserviceService } from './covidservice.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  constructor(private _covidservice:CovidserviceService){}
  title = 'covid_dashboard';  
  ngOnInit():void{
    //this._covidservice.getCovidIndiaData();
  }
  

}
