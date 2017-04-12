"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CountoDirective = (function () {
    function CountoDirective() {
        this.countoChange = new core_1.EventEmitter();
    }
    Object.defineProperty(CountoDirective.prototype, "duration", {
        set: function (duration) {
            this._duration = parseFloat(duration);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountoDirective.prototype, "countTo", {
        set: function (countTo) {
            this._countTo = parseFloat(countTo);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountoDirective.prototype, "countFrom", {
        set: function (countFrom) {
            this._countFrom = parseFloat(countFrom);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountoDirective.prototype, "step", {
        set: function (step) {
            this._step = parseFloat(step);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    CountoDirective.prototype.run = function () {
        var _this = this;
        clearInterval(_this._timer);
        if (isNaN(_this._duration)) {
            return false;
        }
        if (isNaN(_this._step)) {
            return false;
        }
        if (isNaN(_this._countFrom)) {
            return false;
        }
        if (isNaN(_this._countTo)) {
            return false;
        }
        if (_this._step <= 0) {
            console.info('Step must be greater than 0.');
            return false;
        }
        if (_this._duration <= 0) {
            console.info('Duration must be greater than 0.');
            return false;
        }
        if (_this._step > _this._duration * 1000) {
            console.info('Step must be equal or smaller than duration.');
            return false;
        }
        var intermediate = _this._countFrom;
        var increment = Math.abs(_this._countTo - _this._countFrom) / ((_this._duration * 1000) / _this._step);
        _this.countoChange.emit(intermediate);
        _this._timer = setInterval(function () {
            if (_this._countTo < _this._countFrom) {
                if (intermediate <= _this._countTo) {
                    clearInterval(_this._timer);
                    _this.countoChange.emit(_this._countTo);
                }
                else {
                    _this.countoChange.emit(intermediate);
                    intermediate -= increment;
                }
            }
            else {
                if (intermediate >= _this._countTo) {
                    clearInterval(_this._timer);
                    _this.countoChange.emit(_this._countTo);
                }
                else {
                    _this.countoChange.emit(intermediate);
                    intermediate += increment;
                }
            }
        }, _this._step);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CountoDirective.prototype, "countoChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], CountoDirective.prototype, "duration", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], CountoDirective.prototype, "countTo", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], CountoDirective.prototype, "countFrom", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], CountoDirective.prototype, "step", null);
    CountoDirective = __decorate([
        core_1.Directive({
            selector: '[counto]'
        }), 
        __metadata('design:paramtypes', [])
    ], CountoDirective);
    return CountoDirective;
}());
exports.CountoDirective = CountoDirective;
//# sourceMappingURL=counto.directive.js.map