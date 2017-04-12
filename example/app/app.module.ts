import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountoModule }  from 'angular2-counto';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, CountoModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
