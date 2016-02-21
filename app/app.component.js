System.register(['angular2/core', "./counto.directive"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, counto_directive_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (counto_directive_1_1) {
                counto_directive_1 = counto_directive_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<h1>Example with currency filter:</h1>' +
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
                            '<br><br><a target="_blank" href="http://www.unixtimestamp.com/">Click here to get timestamps.</a>',
                        directives: [counto_directive_1.Counto]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map