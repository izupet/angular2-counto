import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div counto [step]="30" [countTo]="10" [countFrom]="0" [duration]="4" (countoChange)="intermediate = $event" (countoEnd)="onCountoEnd()">{{intermediate | currency:'EUR':true:'1.2-2'}}</div>`,
})
export class AppComponent {

    onCountoEnd(): void {
        console.log('counto end');
    }
}
