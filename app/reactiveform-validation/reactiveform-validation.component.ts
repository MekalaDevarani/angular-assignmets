import { Component,ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform-validation',
  templateUrl: './reactiveform-validation.component.html',
  styleUrls: ['./reactiveform-validation.component.css']
})
export class ReactiveformValidationComponent implements OnInit {
  userForm!: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  this.userForm = this.formBuilder.group({
    fullname: ['', [Validators.required]],
    email: ['', [Validators.required]],
   address: ['', [Validators.required]],
    city: ['', [Validators.required]],
    PhoneNo: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]]
    
  }) 

  onSubmit(){
    
    console.log(this.userForm);
      },

      get getControl(){
        return this.userForm.controls;
      }
  
}
