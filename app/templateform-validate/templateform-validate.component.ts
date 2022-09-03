import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform-validate',
  templateUrl: './templateform-validate.component.html',
  styleUrls: ['./templateform-validate.component.css']
})
export class TemplateformValidateComponent implements OnInit {
  model:any={}
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){
   
    console.log("model object values are ",this.model)
  }
}
