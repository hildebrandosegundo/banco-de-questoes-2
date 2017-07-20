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
        $('.modal').modal();
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
    QuestoesComponent.prototype.parseHTML = function (questao) {
        var vm = '';
        vm += "<li>";
        if (questao.enunciado || questao.imagem)
            vm += "<p style=\"text-align:justify\"><span>(" + questao.codigo + ") - </span>";
        if (questao.enunciado) {
            vm += questao.enunciado;
        }
        if (questao.imagem) {
            vm += "<div style=\"display: flex;display: -webkit-flex;justify-content: center;align-items: center;\">           \n                <img src=\"" + questao.imagem + "\"/>\n                </div>";
        }
        if (questao.enunciado || questao.imagem)
            vm += "</p>";
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
        vm += "</li>";
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