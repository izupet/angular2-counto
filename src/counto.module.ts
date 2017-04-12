import { NgModule } from '@angular/core';
import { CountoDirective } from './counto.directive';

@NgModule({
    declarations: [ CountoDirective ],
    exports: [ CountoDirective ]
})
export class CountoModule {}
