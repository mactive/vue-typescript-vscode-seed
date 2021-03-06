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
var vue_1 = require("vue");
var vue_class_component_1 = require("vue-class-component");
var person_1 = require("./components/person/person");
require('./AppTs.less');
console.log(person_1.default);
// 装饰器
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'app';
        return _this;
    }
    return App;
}(vue_1.default));
App = __decorate([
    vue_class_component_1.default({
        props: {
            propMessage: String
        },
        components: {
            Person: person_1.default
        },
        template: require('./AppTs.html')
    })
], App);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
