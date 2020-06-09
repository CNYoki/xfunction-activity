import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ng add @angular/material
import { AppRoutingModule } from './app-routing.module'; // ng generate module app-routing --flat --module=app


import { ShareModule } from './share.module';





@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  //// ng add @angular/material
    AppRoutingModule, // ng generate module app-routing --flat --module=app
    // ng generate @angular/material:address-form <component-name>
    ShareModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
