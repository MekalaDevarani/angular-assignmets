import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveformValidationComponent } from './reactiveform-validation/reactiveform-validation.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeUpdate22Component } from './employee-update22/employee-update22.component';
import { ColorDirectiveDirective } from './color-directive.directive';
import { TemplateformValidateComponent } from './templateform-validate/templateform-validate.component';
import { JwtTokenComponent } from './jwt-token/jwt-token.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { HomeProductContactComponent } from './home-product-contact/home-product-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TemplateFormComponent,
    ReactiveFormComponent,

       EmployeeUpdateComponent,
        EmployeeUpdate22Component,
        EmployeeUpdateComponent,
        ColorDirectiveDirective,
        ReactiveFormComponent,
        TemplateformValidateComponent,
        JwtTokenComponent,
        HomeComponent,
        ProductComponent,
        ContactComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
