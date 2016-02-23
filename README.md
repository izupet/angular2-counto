# angular2-counto

Angular 2 package for nice count animations
 
## Installation
```
npm install counto
```
 
## Usage
 
| Parameter     | Required      | Unit          | Description                             |
| ------------- | ------------- | ------------- | --------------------------------------- |
| step          | yes           | milisecond    | How fast counter in updated             |
| countTo       | yes           | number        | Any start number                        |
| countFrom     | yes           | number        | Any end number                          |                  
| duration      | yes           | seconds       | Duration of animation                   |
 
Any of above parameters can be freely binded to an event. Every time parameter changes, animation wil be executed. 
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
