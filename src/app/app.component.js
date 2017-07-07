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
const core_1 = require("@angular/core");
require("../../public/css/styles.css");
require("materialize-css/dist/css/materialize.min.css");
require("mdi/css/materialdesignicons.css");
require("materialize-css/dist/js/materialize.min.js");
require("ionicons/dist/css/ionicons.css");
require("jquery/dist/jquery-2.1.1.min.js");
require("../../src/jquery.wordexport.js");
const router_1 = require("@angular/router");
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.ano = new Date().getFullYear();
    }
    logout() {
        localStorage.removeItem('tokens');
        this.router.navigate(['/login']);
    }
    istoken() {
        return localStorage.getItem('tokens');
    }
    getAno() {
        return this.ano;
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map