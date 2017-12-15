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
 * Created by hildebrandosegundo on 20/06/17.
 */
var core_1 = require("@angular/core");
var app_http_service_1 = require("../app/app-http.service");
var router_1 = require("@angular/router");
/*import Quill from 'quill';

import { ImageResize } from 'quill-image-resize-module/image-resize.min';

Quill.register('modules/imageResize', ImageResize);

const Parchment = Quill.import('parchment');
let Block = Parchment.query('block');

Block.tagName = 'DIV';
// or class NewBlock extends Block {}; NewBlock.tagName = 'DIV';
Quill.register(Block /!* or NewBlock *!/, true);*/
var jsPdf = require('jspdf');
var html2canvas = require('html2canvas');
var provaGeradaComponent = (function () {
    function provaGeradaComponent(httpService, route) {
        this.httpService = httpService;
        this.route = route;
        this.resultado = [];
        this.provagerada = '';
        this.CountQuestao = 0;
        this.prova = {
            area: {},
            nivel: {},
            serie: {},
            categoria: {},
            habilidade: {}
        };
        this.questoes = {
            data: [],
            total: ''
        };
    }
    provaGeradaComponent.prototype.ngAfterContentChecked = function () {
        if (localStorage['user'])
            this.user = JSON.parse(localStorage['user']);
    };
    provaGeradaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doc = new jsPdf('p', 'pt', 'letter');
        this.route.params
            .subscribe(function (params) {
            _this.view(params.id);
        });
        tinymce.init({
            selector: 'textarea'
        });
    };
    provaGeradaComponent.prototype.percorrer = function (obj) {
        for (var propriedade in obj) {
            if (obj.hasOwnProperty(propriedade)) {
                if (typeof obj[propriedade] == "object" && obj[propriedade] != null) {
                    this.resultado.push(obj[propriedade]);
                }
            }
        }
    };
    provaGeradaComponent.prototype.view = function (id) {
        var _this = this;
        var cont = 1;
        this.httpService.builder('provas')
            .view(id)
            .then(function (res) {
            _this.prova = res;
            _this.percorrer(res);
            for (var i = 2; i < _this.resultado.length; i++) {
                _this.httpService.builder('pquestoes')
                    .getQuestaoIni(_this.resultado[i].id)
                    .then(function (res) {
                    _this.parseGabarito(res, cont);
                    _this.questoes = res;
                    _this.addQuestaoIni();
                    cont++;
                });
            }
        });
    };
    provaGeradaComponent.prototype.parseGabarito = function (res, i) {
        var str = "<tr><td>" + i + "</td><td>" + res.data[0].nivel.nivel + "</td><td>" + res.data[0].categoria.categoria + "</td><td>" + res.data[0].habilidade.habilidade + "</td><td>" + res.data[0].correta + "</td></tr>";
        $('#gabaritobody').append(str);
    };
    provaGeradaComponent.prototype.parseHTML = function (questao) {
        var vm = '';
        this.CountQuestao++;
        if (questao.enunciado || questao.imagem)
            vm += "<p class=\"pinline\">" + this.CountQuestao + " . (" + questao.codigo + ")";
        if (questao.enunciado) {
            vm += questao.enunciado;
        }
        if (questao.enunciado || questao.imagem)
            vm += "</p>";
        if (questao.alternativa1 || questao.imagemAl1)
            vm += "<p class=\"pinline\">a) ";
        if (questao.alternativa1) {
            vm += questao.alternativa1;
        }
        if (questao.alternativa1 || questao.imagemAl1)
            vm += "</p>";
        if (questao.alternativa2 || questao.imagemAl2)
            vm += "<p class=\"pinline\">b) ";
        if (questao.alternativa2) {
            vm += questao.alternativa2;
        }
        if (questao.alternativa2 || questao.imagemAl2)
            vm += "</p>";
        if (questao.alternativa3 || questao.imagemAl3)
            vm += "<p class=\"pinline\">c) ";
        if (questao.alternativa3) {
            vm += questao.alternativa3;
        }
        if (questao.alternativa3 || questao.imagemAl3)
            vm += "</p>";
        if (questao.alternativa4 || questao.imagemAl4)
            vm += "<p class=\"pinline\">d) ";
        if (questao.alternativa4) {
            vm += questao.alternativa4;
        }
        if (questao.alternativa4 || questao.imagemAl4)
            vm += "</p>";
        if (questao.alternativa5 || questao.imagemAl5)
            vm += "<p class=\"pinline\">e) ";
        if (questao.alternativa5) {
            vm += questao.alternativa5;
        }
        if (questao.alternativa5 || questao.imagemAl5)
            vm += "</p>";
        vm += "________________________________________________________________________________";
        return vm;
    };
    provaGeradaComponent.prototype.addQuestaoIni = function () {
        var vm = '';
        for (var i in this.questoes.data) {
            vm += this.parseHTML(this.questoes.data[i]);
        }
        this.provagerada += vm;
    };
    provaGeradaComponent.prototype.ExportDocx = function () {
        $('#content-prova').wordExport(this.prova.ano + this.prova.area_id + this.prova.serie_id + this.prova.id);
    };
    provaGeradaComponent.prototype.ExportPDF = function () {
        var quotes = $('#content-prova').html();
        //! MAKE YOUR PDF
        var pdf = new jsPdf('p', 'pt', 'a4');
        pdf.fromHTML(quotes, 15, 15, { 'width': 500 }, function () {
            pdf.output('dataurlnewwindow');
        });
    };
    provaGeradaComponent.prototype.ExportDocxG = function () {
        $('#gabarito').wordExport('Gabarito - ' + this.prova.ano + this.prova.area_id + this.prova.serie_id + this.prova.id);
    };
    provaGeradaComponent.prototype.ExportPDFG = function () {
        var quotes = $('#gabarito').html();
        //! MAKE YOUR PDF
        var pdf = new jsPdf('p', 'pt', 'a4');
        pdf.fromHTML(quotes, 15, 15, { 'width': 500 }, function () {
            pdf.output('dataurlnewwindow');
        });
    };
    return provaGeradaComponent;
}());
provaGeradaComponent = __decorate([
    core_1.Component({
        templateUrl: './provagerada.component.html',
        styles: ['tbody tr {cursor: pointer}'],
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService,
        router_1.ActivatedRoute])
], provaGeradaComponent);
exports.provaGeradaComponent = provaGeradaComponent;
//# sourceMappingURL=provagerada.component.js.map