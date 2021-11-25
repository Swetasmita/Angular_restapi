import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmp } from './emp';
import {Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpService {

 //To access/serve the data employee.json file from data folder
  private _url : string = "/assets/data/employees.json";

  //declare a private variable of HttpClient
  constructor(private http: HttpClient) { }

  //To make a get request to fetch data using http
  //getemp() method will return an observable of type emp array

  getEmployees(): Observable<IEmp[]>{

   return this.http.get<IEmp[]>(this._url);
   //this._url contains all employee data


  }

}