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
var router_1 = require("@angular/router");
var QuestoesViewComponent = (function () {
    function QuestoesViewComponent(httpService, route, router) {
        this.httpService = httpService;
        this.route = route;
        this.router = router;
        this.questao = {
            area: {},
            nivel: {},
            serie: {},
            categoria: {},
            habilidade: {}
        };
    }
    QuestoesViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage['user'])
            this.user = JSON.parse(localStorage['user']);
        this.route.params
            .subscribe(function (params) {
            _this.view(params.id);
        });
    };
    QuestoesViewComponent.prototype.view = function (id) {
        var _this = this;
        this.httpService.builder('pquestoes')
            .view(id)
            .then(function (res) {
            _this.questao = res;
        });
    };
    QuestoesViewComponent.prototype.delete = function (id) {
        var _this = this;
        this.httpService.builder('pquestoes')
            .delete(id)
            .then(function () {
            _this.router.navigate(['/questoes']);
        });
    };
    return QuestoesViewComponent;
}());
QuestoesViewComponent = __decorate([
    core_1.Component({
        templateUrl: './questoes-view.component.html',
        styles: ['tbody tr {cursor: pointer}'],
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService,
        router_1.ActivatedRoute,
        router_1.Router])
], QuestoesViewComponent);
exports.QuestoesViewComponent = QuestoesViewComponent;
//# sourceMappingURL=questoes-view.component.js.map