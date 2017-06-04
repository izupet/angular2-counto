# angular2-counto

Angular 2 package for nice count animations (angular 4, angular-cli AOT)

## Installation
```
npm install angular2-counto --save
```

### SystemJS
```
var map = {
  'angular2-counto':     'node_modules/angular2-counto/src'
};

var packages = {
  'angular2-counto':   { main: 'counto.module.js', defaultExtension: 'js' }
};
 ```

### Angular-CLI
Just import module as below:


 ```
 import { NgModule }      from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
 import { CountoModule }  from 'angular2-counto';

 @NgModule({
   imports:      [ BrowserModule, CountoModule ],
   declarations: [ AppComponent ],
   bootstrap:    [ AppComponent ]
 })
 export class AppModule { }
```

Example with currency pipe:
 ```
<div counto [step]="30" [countTo]="10" [countFrom]="0" [duration]="4" (countoChange)="counto = $event" (countoEnd)="onCountoEnd()">{{counto | currency:'EUR':true:'1.2-2'}}</div>
 ```

## Usage

| Parameter     | Required      | Unit          | Description                             |
| ------------- | ------------- | ------------- | --------------------------------------- |
| step          | yes           | milisecond    | How fast counter is updated             |
| countTo       | yes           | number        | Any start number                        |
| countFrom     | yes           | number        | Any end number                          |                  
| duration      | yes           | seconds       | Duration of animation                   |

Any of above parameters can be freely binded to an event. Every time parameter changes, animation will be executed.
You can use any pipe you want to modify output to your needs.

## Demo

http://izupet.github.io/angular2-counto
