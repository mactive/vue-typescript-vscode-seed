"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var av_ts_1 = require("av-ts");
var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Rem';
        _this.cnt = 0;
        return _this;
    }
    Object.defineProperty(HomeComponent.prototype, "count", {
        get: function () {
            return this.cnt > 0 ? this.cnt : 0;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.add = function () {
        this.cnt += 1;
    };
    HomeComponent.prototype.sub = function () {
        this.cnt -= 1;
    };
    return HomeComponent;
}(av_ts_1.Vue));
HomeComponent = __decorate([
    av_ts_1.Component({
        template: require('./person.html')
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
