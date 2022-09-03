import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-update22',
  templateUrl: './employee-update22.component.html',
  styleUrls: ['./employee-update22.component.css']
})
export class EmployeeUpdate22Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Employees:any[]=[
    {empid:2,firstname:'jhon',lastname:'smith',salary:10000,dOB:'wed nov 02 1983 00:00:00 GMT+0530(india standard time)',email:'jhon@abc.com'},
    {empid:3,firstname:'jason',lastname:'smith',salary:12000,dOB:'tue aug 12 1980 00:00:00 GMT+0530(india standard time)',email:'jason@abc.com'},
    {empid:4,firstname:'Amber',lastname:'Dorothy',salary:10000,dOB:'fri april 05 1985 00:00:00 GMT+0530(india standard time)',email:'amber@abc.com'},
    {empid:5,firstname:'Mark',lastname:'Frank',salary:15000,dOB:'thu june 10 1982 00:00:00 GMT+0530(india standard time)',email:'mark@abc.com'}

  ]

}
