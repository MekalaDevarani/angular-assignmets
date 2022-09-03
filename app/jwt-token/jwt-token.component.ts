import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-jwt-token',
  templateUrl: './jwt-token.component.html',
  styleUrls: ['./jwt-token.component.css']
})
export class JwtTokenComponent implements OnInit {
  jwt: FormGroup;
  constructor(private build : FormBuilder) {this.jwt=this.build.group({
    username : ['',Validators.required],
    password : ['',Validators.required]
    }) }

  ngOnInit(): void {
  }
  user(jwt : any)
  {
 console.log(jwt.value)
  }
  get control()
  {
   return this.jwt.controls;
  }
}
