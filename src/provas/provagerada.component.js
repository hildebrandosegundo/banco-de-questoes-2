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
var jsPdf = require('jspdf');
var html2canvas = require('html2canvas');
var provaGeradaComponent = (function () {
    function provaGeradaComponent(httpService, route) {
        this.httpService = httpService;
        this.route = route;
        this.resultado = [];
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
    provaGeradaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doc = new jsPdf('p', 'pt', 'letter');
        this.route.params
            .subscribe(function (params) {
            _this.view(params.id);
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
        var str = "<tr><td>" + i + "</td><td>" + res.data[0].correta + "</td></tr>";
        $('#gabaritobody').append(str);
    };
    provaGeradaComponent.prototype.parseHTML = function (questao) {
        var vm = '';
        this.CountQuestao++;
        vm += "<li>";
        if (questao.enunciado || questao.imagem)
            vm += "<p style=\"text-align:justify\"><span>" + this.CountQuestao + " . </span>";
        if (questao.enunciado) {
            vm += questao.enunciado;
        }
        if (questao.imagem) {
            vm += "<div style=\"display: flex;display: -webkit-flex;justify-content: center;align-items: center;\">           \n                <img src=\"" + questao.imagem + "\"/>\n                </div>";
        }
        if (questao.enunciado || questao.imagem)
            vm += "</p><br>";
        if (questao.alternativa1 || questao.imagemAl1)
            vm += "<p style=\"text-align:justify\"><span>a) </span>";
        if (questao.alternativa1) {
            vm += questao.alternativa1;
        }
        if (questao.imagemAl1) {
            vm += "<div>\n                    <img id=\"img1\" src=\"" + questao.imagemAl1 + "\"/>\n                    </div>";
        }
        if (questao.alternativa1 || questao.imagemAl1)
            vm += "</p>";
        if (questao.alternativa2 || questao.imagemAl2)
            vm += "<p style=\"text-align:justify\"><span>b) </span>";
        if (questao.alternativa2) {
            vm += questao.alternativa2;
        }
        if (questao.imagemAl2) {
            vm += "<div>\n                    <img id=\"img2\" src=\"" + questao.imagemAl2 + "\"/>\n                    </div>";
        }
        if (questao.alternativa2 || questao.imagemAl2)
            vm += "</p>";
        if (questao.alternativa3 || questao.imagemAl3)
            vm += "<p style=\"text-align:justify\"><span>c) </span>";
        if (questao.alternativa3) {
            vm += questao.alternativa3;
        }
        if (questao.imagemAl3) {
            vm += "<div>\n                   <img id=\"img3\" src=\"" + questao.imagemAl3 + "\"/>\n                   </div>";
        }
        if (questao.alternativa3 || questao.imagemAl3)
            vm += "</p>";
        if (questao.alternativa4 || questao.imagemAl4)
            vm += "<p style=\"text-align:justify\"><span>d) </span>";
        if (questao.alternativa4) {
            vm += questao.alternativa4;
        }
        if (questao.imagemAl4) {
            vm += "<div>\n                    <img id=\"img4\" src=\"" + questao.imagemAl4 + "\"/>\n                    </div>";
        }
        if (questao.alternativa4 || questao.imagemAl4)
            vm += "</p>";
        if (questao.alternativa5 || questao.imagemAl5)
            vm += "<p style=\"text-align:justify\"><span>e) </span>";
        if (questao.alternativa5) {
            vm += questao.alternativa5;
        }
        if (questao.imagemAl5) {
            vm += "<div>              \n                    <img id=\"img5\" src=\"" + questao.imagemAl5 + "\"/>\n                    </div>";
        }
        if (questao.alternativa5 || questao.imagemAl5)
            vm += "</p>";
        vm += "________________________________________________________________________________\n                </li>";
        return vm;
    };
    provaGeradaComponent.prototype.addQuestaoIni = function () {
        var vm = '';
        for (var i in this.questoes.data) {
            vm += this.parseHTML(this.questoes.data[i]);
        }
        $('#listaQuestao').append(vm);
    };
    provaGeradaComponent.prototype.ExportDocx = function () {
        $('#content-prova').wordExport(this.prova.ano + this.prova.area_id + this.prova.serie_id + this.prova.id);
    };
    provaGeradaComponent.prototype.ExportPDF = function () {
        var quotes = $("#content-prova").get(0);
        //! MAKE YOUR PDF
        var pdf = new jsPdf('p', 'pt', 'a4', true);
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