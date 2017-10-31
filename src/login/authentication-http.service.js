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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by hildebrandosegundo on 08/06/17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var router_1 = require("@angular/router");
var AuthenticationHttpService = (function (_super) {
    __extends(AuthenticationHttpService, _super);
    function AuthenticationHttpService(backend, defaultOptions, router) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.router = router;
        var token = localStorage['tokens'] ? JSON.parse(localStorage['tokens']) : {};
        if (token.access_token) {
            _this.setAccessToken(token.access_token);
        }
        return _this;
    }
    AuthenticationHttpService.prototype.request = function (url, options) {
        var _this = this;
        return _super.prototype.request.call(this, url, options).catch(function (error) {
            if (error.status === 401 || error.status === 0) {
                _this.refreshToken()
                    .then(function (response) {
                    if (response) {
                        var token = localStorage['tokens'] ? JSON.parse(localStorage['tokens']) : {};
                        if (token.access_token) {
                            _this.setAccessToken(token.access_token);
                        }
                    }
                    else {
                        _this.router.navigate(['/login']);
                    }
                });
            }
            return Observable_1.Observable.throw(error);
        });
    };
    AuthenticationHttpService.prototype.setAccessToken = function (token) {
        var header = new http_1.Headers({ 'Authorization': 'Bearer ' + token });
        this._defaultOptions.headers = header;
    };
    AuthenticationHttpService.prototype.refreshToken = function () {
        var token = localStorage['tokens'] ? JSON.parse(localStorage['tokens']) : {};
        if (token.refresh_token) {
            var auth = {
                grant_type: 'refresh_token',
                client_id: '2',
                client_secret: 'blZmXjP1utuXX9wDg4DKbXAN1SPq1JvUnZKTZfHX',
                refresh_token: token.refresh_token,
                scope: '',
            };
            return this.post('http://localhost:8000/oauth/token', auth)
                .toPromise()
                .then(function (res) {
                var result = res.json() || {};
                localStorage['tokens'] = JSON.stringify(result);
                return result.refresh_token !== undefined;
            });
        }
        return new Promise(function (resolve, reject) {
            return resolve(false);
        });
    };
    return AuthenticationHttpService;
}(http_1.Http));
AuthenticationHttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.XHRBackend,
        http_1.RequestOptions,
        router_1.Router])
], AuthenticationHttpService);
exports.AuthenticationHttpService = AuthenticationHttpService;
//# sourceMappingURL=authentication-http.service.js.map