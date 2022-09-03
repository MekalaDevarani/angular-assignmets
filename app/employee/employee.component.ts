import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
