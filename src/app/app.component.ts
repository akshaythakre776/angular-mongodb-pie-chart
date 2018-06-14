import { Component } from '@angular/core';
import { DataService } from './data.service';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Http , Response } from '@angular/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {

  customer: Array<any>;
  data: any;
    
  constructor(private _dataService: DataService, private httpService: HttpClient, private _http: Http) {

    // this._dataService.getUsers()
    //   .subscribe(res => this.customer = res);
  }
     // ADD CHART OPTIONS. 
      pieChartOptions = {
          responsive: true
      }
  
      pieChartLabels =  ['SALARY', 'TOTAL_EXPENSE', 'MILK', 'FOOD', 'OTHRES'];
          // CHART COLOR.
      pieChartColor:any = [
          {
              backgroundColor: ['rgba(30, 169, 224, 0.8)',
              'rgba(255,165,0,0.9)',
              'rgba(139, 136, 136, 0.9)',
              'rgba(255, 161, 181, 0.9)',
              'rgba(255, 102, 0, 0.9)'
              ]
          }
      ]
     
      ngOnInit () {

       this._dataService.getUsers().subscribe(
       data => {
                  this.customer=data;
                  console.log(this.customer);

                  this.pieChartData = [data[0].salary,data[0].totalexpense,data[0].milk,
                  data[0].food,data[0].other]  	// FILL THE CHART ARRAY WITH DATA.
              }
        );
      }  
      public pieChartData:number[] = [];
      onChartClick(event) {
          console.log(event);
      }
    }