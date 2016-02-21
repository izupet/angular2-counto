import {Component} from 'angular2/core';
import {Counto} from "./counto.directive";

@Component({
    selector: 'my-app',
    template:
        '<h1>Example with currency filter:</h1>' +
        '<input type="text" placeholder="Duration - seconds" [(ngModel)]="durationC"><br><br>' +
        '<input type="text" placeholder="Step - miliseconds" [(ngModel)]="stepC"><br><br>' +
        '<input type="text" placeholder="Count from - any number" [(ngModel)]="countFromC"><br><br>' +
        '<input type="text" placeholder="Count to - any number" [(ngModel)]="countToC"><br><br>' +
        '<counto [step]="stepC" [countTo]="countToC" [countFrom]="countFromC" [duration]="durationC" (countoChange)="currencyCountoC = $event"><h3>{{currencyCountoC | currency:\'EUR\':true:\'1.2-2\'}}</h3></counto>' +
        '<h1>Example with date filter:</h1>' +
        '<input type="text" placeholder="Duration - seconds" [(ngModel)]="durationD"><br><br>' +
        '<input type="text" placeholder="Step - miliseconds" [(ngModel)]="stepD"><br><br>' +
        '<input type="text" placeholder="Count from - timestamp" [(ngModel)]="countFromD"><br><br>' +
        '<input type="text" placeholder="Count to - timestamp" [(ngModel)]="countToD"><br><br>' +
        '<counto [step]="stepD" [countTo]="countToD" [countFrom]="countFromD" [duration]="durationD" (countoChange)="currencyCountoD = $event"><h3>{{currencyCountoD | date:\'short\'}}</h3></counto>' +
        '<br><br><a target="_blank" href="http://www.unixtimestamp.com/">Click here to get timestamps.</a>'
    directives: [Counto]
})

export class AppComponent {
    public currencyCountoC: any;

    public currencyCountoD: any;
}
