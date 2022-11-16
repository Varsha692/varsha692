import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{  FormArray, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { LoginService } from './login.service';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestChildComponent } from './test-child/test-child.component';
import { WeInputComponent } from './we-input/we-input.component';
import { WeRadioButtonComponent } from './we-radio-button/we-radio-button.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CurdOperationComponent } from './curd-operation/curd-operation.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { WeDateComponent } from './sharedd/commom/we-date/we-date.component';
import { WeUploadFileComponent } from './sharedd/commom/we-upload-file/we-upload-file.component';
import { WeSelectComponent } from './sharedd/commom/we-select/we-select.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';









@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
   
    TestChildComponent,
        WeInputComponent,
        WeRadioButtonComponent,
        ContentProjectionComponent,
        ContactComponent,
        CartComponent,
        CurdOperationComponent,
        ParentFormComponent,
        WeDateComponent,
        WeUploadFileComponent,
        WeSelectComponent
     
       
   
  
        
      
    
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
    // FormArray
    
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
