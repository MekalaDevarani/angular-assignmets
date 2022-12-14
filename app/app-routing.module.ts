import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { WildCardComponent } from './wild-card/wild-card.component';

const routes: Routes = [
  
    { path:"", component:WildCardComponent },
   { path:"home",component:HomeComponent},
   {path:"product",component: ProductComponent},
   {path:"contact",component: ContactComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
