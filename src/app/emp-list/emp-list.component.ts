import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees: any=[];
  
  //Create a local variable
  constructor(private _empService :EmpService) { }

  ngOnInit() {

    this._empService.getEmployees()
    .subscribe(data => this.employees = data);
  }

}
