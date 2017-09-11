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
 * Created by hildebrandosegundo on 06/06/17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var AppHttpService = (function () {
    function AppHttpService(http) {
        this.http = http;
        this.options = {};
    }
    AppHttpService.prototype.setAccessToken = function (token) {
        var header = new http_1.Headers({ 'Authorization': 'Bearer ' + token });
        this.options.headers = header;
    };
    AppHttpService.prototype.client = function (url) {
        this.url = 'http://localhost:8000/' + url;
        return this;
    };
    AppHttpService.prototype.builder = function (resource) {
        this.url = 'http://localhost:8000/api/' + resource;
        return this;
    };
    AppHttpService.prototype.list = function (options) {
        if (options === void 0) { options = {}; }
        var url = this.url;
        if (options.limit === undefined) {
            options.limit = 20;
        }
        if (options.page === undefined) {
            options.page = 1;
        }
        if (options.order === undefined) {
            options.order = 'id,asc';
        }
        url += '?limit=' + options.limit;
        url += '&page=' + options.page;
        url += '&order=' + options.order;
        return this.http.get(url, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.view = function (id) {
        return this.http.get(this.url + '/' + id, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.update = function (id, data) {
        return this.http.put(this.url + '/' + id, data, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.insert = function (data) {
        return this.http.post(this.url, data, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.delete = function (id) {
        return this.http.delete(this.url + '/' + id, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.search = function (term) {
        return this.http.get(this.url + '?like=codigo,' + term, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.getNivel = function (data) {
        return this.http.get(this.url + '?where[serie_id]=' + data.serie_id + '&where[area_id]=' + data.area_id, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.getCategoria = function (data) {
        return this.http.get(this.url + '?where[serie_id]=' + data.serie_id + '&where[area_id]=' + data.area_id + '&where[nivel_id]=' + data.nivel_id, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.getHabilidade = function (data) {
        return this.http.get(this.url + '?where[serie_id]=' + data.serie_id + '&where[area_id]=' + data.area_id + '&where[categoria_id]=' + data.categoria_id, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.getQuestao = function (data) {
        return this.http.get(this.url + '?where[serie_id]=' + data.serie_id + '&where[area_id]=' + data.area_id + '&where[categoria_id]=' + data.categoria_id + '&where[habilidade_id]=' + data.habilidade_id, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.getQuestaoIni = function (data) {
        return this.http.get(this.url + '?where[id]=' + data, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    AppHttpService.prototype.getUser = function () {
        return this.http.get(this.url, this.options)
            .toPromise()
            .then(function (res) {
            return res.json() || {};
        });
    };
    return AppHttpService;
}());
AppHttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppHttpService);
exports.AppHttpService = AppHttpService;
//# sourceMappingURL=app-http.service.js.map