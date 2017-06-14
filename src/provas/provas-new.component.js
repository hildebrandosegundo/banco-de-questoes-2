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
var provasNewComponent = (function () {
    function provasNewComponent(httpService, route, router) {
        this.httpService = httpService;
        this.route = route;
        this.router = router;
        this.prova = {
            serie_id: '',
            area_id: '',
            ano: '',
            bimestre: '',
            questao1_id: '',
            questao2_id: '',
            questao3_id: '',
            questao4_id: '',
            questao5_id: '',
            questao6_id: '',
            questao7_id: '',
            questao8_id: '',
            questao9_id: '',
            questao10_id: '',
            questao11_id: '',
            questao12_id: '',
            questao13_id: '',
            questao14_id: '',
            questao15_id: '',
            questao16_id: '',
            questao17_id: '',
            questao18_id: '',
            questao19_id: '',
            questao20_id: '',
            questao21_id: '',
            questao22_id: '',
            questao23_id: '',
            questao24_id: '',
            questao25_id: '',
            questao26_id: '',
            questao27_id: '',
            questao28_id: '',
            questao29_id: '',
            questao30_id: '',
            questao31_id: '',
            questao32_id: '',
            questao33_id: '',
            questao34_id: '',
            questao35_id: '',
            questao36_id: '',
            questao37_id: '',
            questao38_id: '',
            questao39_id: '',
            questao41_id: '',
            questao42_id: '',
            questao43_id: '',
            questao44_id: '',
            questao45_id: '',
            questao46_id: '',
            questao47_id: '',
            questao48_id: '',
            questao49_id: '',
            questao50_id: ''
        };
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
    provasNewComponent.prototype.ngOnInit = function () {
        this.listAreas();
        this.listSeries();
        $('.collapsible').collapsible();
    };
    provasNewComponent.prototype.listAreas = function () {
        var _this = this;
        this.httpService.builder('areas')
            .list()
            .then(function (res) {
            _this.areas = res;
        });
    };
    provasNewComponent.prototype.listSeries = function () {
        var _this = this;
        this.httpService.builder('series')
            .list()
            .then(function (res) {
            _this.series = res;
        });
    };
    provasNewComponent.prototype.listNivels = function (data) {
        var _this = this;
        this.httpService.builder('nivels')
            .getNivel(data)
            .then(function (res) {
            _this.nivels = res;
        });
    };
    provasNewComponent.prototype.listCategorias = function (data) {
        var _this = this;
        this.httpService.builder('categorias')
            .getCategoria(data)
            .then(function (res) {
            _this.categorias = res;
        });
    };
    provasNewComponent.prototype.listHabilidades = function (data) {
        var _this = this;
        this.httpService.builder('habilidades')
            .getHabilidade(data)
            .then(function (res) {
            _this.habilidades = res;
        });
    };
    provasNewComponent.prototype.listQuestao = function (data) {
        var _this = this;
        this.httpService.builder('pquestoes')
            .getQuestao(data)
            .then(function (res) {
            _this.questoes = res;
        });
    };
    provasNewComponent.prototype.getQuestao = function (data) {
        this.listQuestao(data);
        $('#buttonAdd').addClass('pulse');
    };
    provasNewComponent.prototype.removeQuestao = function () {
        alert('teste');
    };
    provasNewComponent.prototype.addQuestao = function (data) {
        $('#buttonAdd').removeClass('pulse');
        var vm = '';
        for (var i in this.questoes.data) {
            vm += "<li id=\"" + this.questoes.data[i].id + "\">\n        <div class=\"collapsible-header\">\n            <div class=\"col s11\"><small>Id: " + this.questoes.data[i].id + " | Area: " + this.questoes.data[i].area.area + " | S\u00E9rie: " + this.questoes.data[i].serie.serie + " | Tema: " + this.questoes.data[i].categoria.categoria + "</small></div><a onclick=\"var li = $(this).closest('li'); li.fadeOut(400, function () {li.remove()})\" class=\"btn-floating btn waves-effect waves-light red\"><div class=\"ion-md-trash\"></div></a>\n        </div>\n        <div class=\"collapsible-body\">\n            <div *ngIf=\"" + this.questoes.data[i].enunciado + "\" class=\"input-field\">\n                <textarea [(ngModel)]=\"questao.enunciado\" name=\"enuciado\" class=\"materialize-textarea\">" + this.questoes.data[i].enunciado + "</textarea>\n                <label class=\"active\">ENUCIADO DA QUEST\u00C3O</label>\n            </div>\n            <div>\n                <div *ngIf=\"" + this.questoes.data[i].imagem + "\">\n                    <img src=\"" + this.questoes.data[i].imagem + "\"/>\n                </div>\n            </div>\n\n            <div *ngIf=\"" + this.questoes.data[i].alternativa1 + "\" class=\"input-field\">\n                <textarea [(ngModel)]=\"prova.alternativa1\" name=\"alternativa1\" class=\"materialize-textarea\">" + this.questoes.data[i].alternativa1 + "</textarea>\n                <label class=\"active\">1\u00BA ALTERNATIVA</label>\n            </div>\n            <div>\n                <div *ngIf=\"" + this.questoes.data[i].imagemAl1 + "\">\n                    <img src=\"" + this.questoes.data[i].imagemAl1 + "\"/>\n                </div>\n            </div>\n            <div *ngIf=\"" + this.questoes.data[i].alternativa2 + "\" class=\"input-field\">\n                <textarea [(ngModel)]=\"prova.alternativa2\" name=\"alternativa2\" class=\"materialize-textarea\">" + this.questoes.data[i].alternativa2 + "</textarea>\n                <label class=\"active\">2\u00BA ALTERNATIVA</label>\n            </div>\n            <div>\n                <div *ngIf=\"" + this.questoes.data[i].imagemAl2 + "\">\n                    <img src=\"" + this.questoes.data[i].imagemAl2 + "\"/>\n                </div>\n            </div>\n            <div *ngIf=\"" + this.questoes.data[i].alternativa3 + "\" class=\"input-field\">\n                <textarea [(ngModel)]=\"prova.alternativa3\" name=\"alternativa3\" class=\"materialize-textarea\">" + this.questoes.data[i].alternativa3 + "</textarea>\n                <label class=\"active\">3\u00BA ALTERNATIVA</label>\n            </div>\n            <div>\n                <div *ngIf=\"" + this.questoes.data[i].imagemAl3 + "\">\n                    <img src=\"" + this.questoes.data[i].imagemAl3 + "\"/>\n                </div>\n            </div>\n            <div *ngIf=\"" + this.questoes.data[i].alternativa4 + "\" class=\"input-field\">\n                <textarea [(ngModel)]=\"prova.alternativa4\" name=\"alternativa4\" class=\"materialize-textarea\">" + this.questoes.data[i].alternativa4 + "</textarea>\n                <label class=\"active\">4\u00BA ALTERNATIVA</label>\n            </div>\n            <div>\n                <div *ngIf=\"" + this.questoes.data[i].imagemAl4 + "\">\n                    <img src=\"" + this.questoes.data[i].imagemAl4 + "\"/>\n                </div>\n            </div>\n            <div *ngIf=\"" + this.questoes.data[i].alternativa5 + "\" class=\"input-field\">\n                <textarea [(ngModel)]=\"questao.alternativa5\" name=\"alternativa5\" class=\"materialize-textarea\">" + this.questoes.data[i].alternativa5 + "</textarea>\n                <label class=\"active\">5\u00BA ALTERNATIVA</label>\n            </div>\n            <div>\n                <div *ngIf=\"" + this.questoes.data[i].imagemAl5 + "\">\n                    <img src=\"" + this.questoes.data[i].imagemAl5 + "\"/>\n                </div>\n            </div>\n        </div>\n    </li>";
        }
        $('#listaQuestao').append(vm);
    };
    provasNewComponent.prototype.save = function () {
        var _this = this;
        this.httpService.builder('provas')
            .insert(this.prova)
            .then(function (res) {
            _this.router.navigate(['/provas']);
        });
    };
    return provasNewComponent;
}());
provasNewComponent = __decorate([
    core_1.Component({
        templateUrl: './provas-new.component.html',
        styles: ['tbody tr {cursor: pointer}'],
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService,
        router_1.ActivatedRoute,
        router_1.Router])
], provasNewComponent);
exports.provasNewComponent = provasNewComponent;
//# sourceMappingURL=provas-new.component.js.map