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
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
const router_1 = require("@angular/router");
let AuthenticationHttpService = class AuthenticationHttpService extends http_1.Http {
    constructor(backend, defaultOptions, router) {
        super(backend, defaultOptions);
        this.router = router;
        let token = localStorage['tokens'] ? JSON.parse(localStorage['tokens']) : {};
        if (token.access_token) {
            this.setAccessToken(token.access_token);
        }
    }
    request(url, options) {
        return super.request(url, options).catch((error) => {
            if (error.status === 401 || error.status === 0) {
                this.refreshToken()
                    .then((response) => {
                    if (response) {
                        let token = localStorage['tokens'] ? JSON.parse(localStorage['tokens']) : {};
                        if (token.access_token) {
                            this.setAccessToken(token.access_token);
                            alert('Login atualizado, refaça o último passo');
                        }
                    }
                    else {
                        this.router.navigate(['/login']);
                    }
                });
            }
            return Observable_1.Observable.throw(error);
        });
    }
    setAccessToken(token) {
        let header = new http_1.Headers({ 'Authorization': 'Bearer ' + token });
        this._defaultOptions.headers = header;
    }
    refreshToken() {
        let token = localStorage['tokens'] ? JSON.parse(localStorage['tokens']) : {};
        if (token.refresh_token) {
            let auth = {
                grant_type: 'refresh_token',
                client_id: '2',
                client_secret: 'R8u3pIAN6kDgiNrymKa5rhPiAoaC3g0pX0UZL4Az',
                refresh_token: token.refresh_token,
                scope: '',
            };
            return this.post('http://localhost:8000/oauth/token', auth)
                .toPromise()
                .then((res) => {
                let result = res.json() || {};
                localStorage['tokens'] = JSON.stringify(result);
                return result.refresh_token !== undefined;
            });
        }
        return new Promise((resolve, reject) => {
            return resolve(false);
        });
    }
};
AuthenticationHttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.XHRBackend,
        http_1.RequestOptions,
        router_1.Router])
], AuthenticationHttpService);
exports.AuthenticationHttpService = AuthenticationHttpService;
//# sourceMappingURL=authentication-http.service.js.map