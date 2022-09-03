import { Component, OnInit } from '@angular/core';
import {  IEmployee} from './employee-update';
@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  
  // enableEdit: boolean = false;
  // enableEditIndex!: null;
  showEdit : boolean= false;
  currentIndex:null | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  Employees:any[]=[
    {empid:2,firstname:'jhon',lastname:'smith',salary:1000,dOB:'wed nov 02 1983 00:00:00 GMT+0530(india standard time)',email:'jhon@abc.com', action:'EditEmp()'}
  ];
  EditEmp()
  {
    this.showEdit=true;
  }
  UpdateEmp()
  {
    this.showEdit=false;
  }
  }
//   editEmployee(index: any) {

//    this.editEmployee=true;

// }
// enableEditMethod(e: any, i: any) {
//   this.enableEdit = true;
//   this.enableEditIndex = i;
//   console.log(i, e);
// }
// EditEmp(item:any){
// item.isEdit=true;
// }

