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
var app_http_service_1 = require("../app/app-http.service");
var provasComponent = (function () {
    function provasComponent(httpService) {
        this.httpService = httpService;
        this.provas = {
            data: []
        };
    }
    provasComponent.prototype.ngOnInit = function () {
        this.list();
        $('.tooltipped').tooltip({ delay: 50 });
    };
    provasComponent.prototype.list = function () {
        var _this = this;
        this.httpService.builder('provas')
            .list({ order: 'id,desc' })
            .then(function (res) {
            _this.provas = res;
        });
    };
    provasComponent.prototype.pageChanged = function (data) {
        this.provas = data;
    };
    provasComponent.prototype.searched = function (data) {
        this.provas = data;
    };
    return provasComponent;
}());
provasComponent = __decorate([
    core_1.Component({
        templateUrl: './provas.component.html',
        styles: ['tbody tr {cursor: pointer}'],
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService])
], provasComponent);
exports.provasComponent = provasComponent;
//# sourceMappingURL=provas.component.js.map