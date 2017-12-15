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
        this.questao = {
            data: []
        };
        this.questoes = {
            data: []
        };
        this.areas = {
            data: []
        };
        this.series = {
            data: []
        };
        this.nivels = {
            data: []
        };
        this.categorias = {
            data: []
        };
        this.habilidades = {
            data: []
        };
    }
    QuestoesComponent.prototype.ngOnInit = function () {
        this.list();
        this.listAreas();
        this.listSeries();
        this.listNivels();
        this.listCategorias();
        this.listHabilidades();
        $('.modal').modal();
        if (localStorage['user'])
            this.user = JSON.parse(localStorage['user']);
    };
    QuestoesComponent.prototype.list = function () {
        var _this = this;
        this.httpService.builder('pquestoes')
            .list({ order: 'id,desc' })
            .then(function (res) {
            _this.questoes = res;
        });
    };
    QuestoesComponent.prototype.listAreas = function () {
        var _this = this;
        this.httpService.builder('areas')
            .list()
            .then(function (res) {
            _this.areas = res;
        });
    };
    QuestoesComponent.prototype.listSeries = function () {
        var _this = this;
        this.httpService.builder('series')
            .list()
            .then(function (res) {
            _this.series = res;
        });
    };
    QuestoesComponent.prototype.listNivels = function () {
        var _this = this;
        this.httpService.builder('pquestoes')
            .getNivel2()
            .then(function (res) {
            _this.nivels = res;
        });
    };
    QuestoesComponent.prototype.listCategorias = function () {
        var _this = this;
        this.httpService.builder('pquestoes')
            .getCategoria2()
            .then(function (res) {
            _this.categorias = res;
        });
    };
    QuestoesComponent.prototype.listHabilidades = function () {
        var _this = this;
        this.httpService.builder('pquestoes')
            .getHabilidade2()
            .then(function (res) {
            _this.habilidades = res;
        });
    };
    QuestoesComponent.prototype.listArea1 = function (data) {
        var _this = this;
        this.httpService.builder('pquestoes')
            .getArea1(data)
            .then(function (res) {
            _this.questoes = res;
        });
    };
    QuestoesComponent.prototype.listSerie1 = function (data) {
        var _this = this;
        this.httpService.builder('pquestoes')
            .getSerie1(data)
            .then(function (res) {
            _this.questoes = res;
        });
    };
    QuestoesComponent.prototype.listNivel1 = function (data) {
        var _this = this;
        this.httpService.builder('pquestoes')
            .getNivel3(data)
            .then(function (res) {
            _this.questoes = res;
        });
    };
    QuestoesComponent.prototype.listCategoria1 = function (data) {
        var _this = this;
        this.httpService.builder('pquestoes')
            .getCategoria3(data)
            .then(function (res) {
            _this.questoes = res;
        });
    };
    QuestoesComponent.prototype.listHabilidade1 = function (data) {
        var _this = this;
        this.httpService.builder('pquestoes')
            .getHabilidade3(data)
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
    QuestoesComponent.prototype.parseHTML = function (questao) {
        var vm = '';
        if (questao.enunciado || questao.imagem)
            vm += "<DIV>(" + questao.codigo + ")";
        if (questao.enunciado) {
            vm += questao.enunciado + '</DIV>';
        }
        if (questao.alternativa1 || questao.imagemAl1)
            vm += "<DIV class=\"input-field\">a) ";
        if (questao.alternativa1) {
            vm += questao.alternativa1 + '</DIV>';
        }
        if (questao.alternativa2 || questao.imagemAl2)
            vm += "<DIV class=\"input-field\">b) ";
        if (questao.alternativa2) {
            vm += questao.alternativa2 + '</DIV>';
        }
        if (questao.alternativa3 || questao.imagemAl3)
            vm += "<DIV class=\"input-field\">c) ";
        if (questao.alternativa3) {
            vm += questao.alternativa3 + '</DIV>';
        }
        if (questao.alternativa4 || questao.imagemAl4)
            vm += "<DIV class=\"input-field\">d) ";
        if (questao.alternativa4) {
            vm += questao.alternativa4 + '</DIV>';
        }
        if (questao.alternativa5 || questao.imagemAl5)
            vm += "<DIV class=\"input-field\">e) ";
        if (questao.alternativa5) {
            vm += questao.alternativa5 + '</DIV>';
        }
        return vm;
    };
    QuestoesComponent.prototype.openModal = function (data) {
        $('#modal-content1').html(this.parseHTML(data));
        $('#modal1').modal('open');
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