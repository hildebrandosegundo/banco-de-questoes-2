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
var QuestoesComponent = (function () {
    function QuestoesComponent(httpService) {
        this.httpService = httpService;
        this.questoes = {
            data: []
        };
    }
    QuestoesComponent.prototype.ngOnInit = function () {
        this.list();
    };
    QuestoesComponent.prototype.list = function () {
        var _this = this;
        this.httpService.builder('pquestoes')
            .list({ order: 'id,desc' })
            .then(function (res) {
            _this.questoes = res;
        });
    };
    QuestoesComponent.prototype.pageChanged = function (data) {
        this.questoes = data;
    };
    QuestoesComponent.prototype.searched = function (data) {
        this.questoes = data;
    };
    return QuestoesComponent;
}());
QuestoesComponent = __decorate([
    core_1.Component({
        templateUrl: './questoes.component.html',
        styles: ['tbody tr {cursor: pointer}'],
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService])
], QuestoesComponent);
exports.QuestoesComponent = QuestoesComponent;
//# sourceMappingURL=questoes.component.js.map