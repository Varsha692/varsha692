import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { CurdOperationComponent } from './curd-operation/curd-operation.component'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { RegisterComponent } from './register/register.component';
import { WeDateComponent } from './sharedd/commom/we-date/we-date.component';
import { WeSelectComponent } from './sharedd/commom/we-select/we-select.component';
import { WeUploadFileComponent } from './sharedd/commom/we-upload-file/we-upload-file.component';

import { WeInputComponent } from './we-input/we-input.component';
import { WeRadioButtonComponent } from './we-radio-button/we-radio-button.component';



const routes: Routes = [
  
  // {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'we-input', component:WeInputComponent},
  {path:'we-radio-button', component: WeRadioButtonComponent},
  {path:'content-projection', component: ContentProjectionComponent},
  {path:'contact',  component: ContactComponent},
{path:'cart', component:CartComponent},
{path:'curd-operation', component:CurdOperationComponent},
{path:'parent-form',component:ParentFormComponent},
{path:'we-date', component:WeDateComponent},
{path:'we-upload-file', component:WeUploadFileComponent},
{path:'we-select', component:WeSelectComponent}



 
 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
