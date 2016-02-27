# angular2-counto

Angular 2 package for nice count animations
 
## Installation
```
npm install counto
```

```
System.config({
    map: {
        'angular2-counto': 'node_modules/angular2-counto'
    },
    packages: {
        'angular2-counto': {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});
 ```
 
 ```
import {Counto} from "angular2-counto/src/counto.directive";
   
@Component({
    directives: [Counto]
})

export class AccountComponent {
    public intermediate: any;
}
```

 ```
<counto [step]="30" [countTo]="10" [countFrom]="0" [duration]="4" (countoChange)="intermediate = $event">{{intermediate | currency:'EUR':true:'1.2-2'}}</counto>
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
 
## Example
 
```
@Component({
   selector: "my-app",
   template: "<counto 
       [step]="30" 
       [countTo]="100" 
       [countFrom]="0" 
       [duration]="3" 
       (countoChange)="intermediate = $event">
       {{intermediate | currency:'EUR':true:'1.2-2'}}
   </counto>",
   directives: [Counto]
})
 
export class AppComponent {
   public intermediate: any;
}
```
 
## Demo

http://izupet.github.io/angular2-counto
