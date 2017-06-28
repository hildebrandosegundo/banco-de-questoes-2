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
/**
 * Created by hildebrandosegundo on 08/06/17.
 */
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const app_http_service_1 = require("../app/app-http.service");
let LoginComponent = class LoginComponent {
    constructor(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.user = {};
    }
    login() {
        let auth = {
            grant_type: 'password',
            client_id: '2',
            client_secret: 'blZmXjP1utuXX9wDg4DKbXAN1SPq1JvUnZKTZfHX',
            username: this.user.username,
            password: this.user.password,
            scope: '',
        };
        this.httpService.client('oauth/token').insert(auth)
            .then((res) => {
            localStorage['tokens'] = JSON.stringify(res);
            this.httpService.setAccessToken(res.access_token);
            this.router.navigate(['/home']);
        });
    }
};
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: './login.component.html',
        styles: [require('./login.component.css').toString()],
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map