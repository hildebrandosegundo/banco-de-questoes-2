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
var QuestoesNewComponent = (function () {
    function QuestoesNewComponent(httpService, route, router) {
        this.httpService = httpService;
        this.route = route;
        this.router = router;
        this.questao = {
            serie_id: '',
            area_id: '',
            nivel_id: '',
            categoria_id: '',
            habilidade_id: '',
            enunciado: '',
            imagem: '',
            imagemAl1: '',
            imagemAl2: '',
            imagemAl3: '',
            imagemAl4: '',
            imagemAl5: '',
            correta: '',
            codigo: '',
            alternativa1: '',
            alternativa2: '',
            alternativa3: '',
            alternativa4: '',
            alternativa5: ''
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
    QuestoesNewComponent.prototype.ngOnInit = function () {
        this.listAreas();
        this.listSeries();
    };
    QuestoesNewComponent.prototype.onFileChange = function (e, img) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
            return;
        }
        this.createImage(files[0], img);
    };
    QuestoesNewComponent.prototype.createImage = function (file, img) {
        var reader = new FileReader();
        var vm = this;
        reader.onload = function (e) {
            if (img === 1) {
                vm.questao.imagem = e.target.result;
            }
            if (img === 2) {
                vm.questao.imagemAl1 = e.target.result;
            }
            if (img === 3) {
                vm.questao.imagemAl2 = e.target.result;
            }
            if (img === 4) {
                vm.questao.imagemAl3 = e.target.result;
            }
            if (img === 5) {
                vm.questao.imagemAl4 = e.target.result;
            }
            if (img === 6) {
                vm.questao.imagemAl5 = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    };
    QuestoesNewComponent.prototype.removeImage = function (img) {
        if (img === 1) {
            this.questao.imagem = '';
        }
        if (img === 2) {
            this.questao.imagemAl1 = '';
        }
        if (img === 3) {
            this.questao.imagemAl2 = '';
        }
        if (img === 4) {
            this.questao.imagemAl3 = '';
        }
        if (img === 5) {
            this.questao.imagemAl4 = '';
        }
        if (img === 6) {
            this.questao.imagemAl5 = '';
        }
    };
    QuestoesNewComponent.prototype.listAreas = function () {
        var _this = this;
        this.httpService.builder('areas')
            .list()
            .then(function (res) {
            _this.areas = res;
        });
    };
    QuestoesNewComponent.prototype.listSeries = function () {
        var _this = this;
        this.httpService.builder('series')
            .list()
            .then(function (res) {
            _this.series = res;
        });
    };
    QuestoesNewComponent.prototype.listNivels = function (data) {
        var _this = this;
        this.httpService.builder('nivels')
            .getNivel(data)
            .then(function (res) {
            _this.nivels = res;
        });
    };
    QuestoesNewComponent.prototype.listCategorias = function (data) {
        var _this = this;
        this.httpService.builder('categorias')
            .getCategoria(data)
            .then(function (res) {
            _this.categorias = res;
        });
    };
    QuestoesNewComponent.prototype.listHabilidades = function (data) {
        var _this = this;
        this.httpService.builder('habilidades')
            .getHabilidade(data)
            .then(function (res) {
            _this.habilidades = res;
        });
    };
    /* view (id: number) {
         this.httpService.builder('pquestoes')
             .view(id)
             .then((res) => {
                 this.questao = res;
             })
     }*/
    QuestoesNewComponent.prototype.save = function () {
        var _this = this;
        var data = new FormData();
        data.append('serie_id', this.questao.serie_id || '');
        data.append('area_id', this.questao.area_id || '');
        data.append('nivel_id', this.questao.nivel_id || '');
        data.append('categoria_id', this.questao.categoria_id || '');
        data.append('habilidade_id', this.questao.habilidade_id || '');
        data.append('enunciado', this.questao.enunciado || '');
        data.append('imagem', this.questao.imagem || '');
        data.append('imagemAl1', this.questao.imagemAl1 || '');
        data.append('imagemAl2', this.questao.imagemAl2 || '');
        data.append('imagemAl3', this.questao.imagemAl3 || '');
        data.append('imagemAl4', this.questao.imagemAl4 || '');
        data.append('imagemAl5', this.questao.imagemAl5 || '');
        data.append('alternativa1', this.questao.alternativa1 || '');
        data.append('alternativa2', this.questao.alternativa2 || '');
        data.append('alternativa3', this.questao.alternativa3 || '');
        data.append('alternativa4', this.questao.alternativa4 || '');
        data.append('alternativa5', this.questao.alternativa5 || '');
        data.append('correta', this.questao.correta || '');
        data.append('codigo', $("#selectArea option:selected").val() + $("#selectSerie option:selected").val() + $("#selectNivel option:selected").text() + $("#selectCategoria option:selected").text().split(' - ')[0] + $("#selectHabilidade option:selected").text().split(' - ')[0] || '');
        console.log(this.questao);
        this.httpService.builder('pquestoes')
            .insert(data)
            .then(function (res) {
            _this.router.navigate(['/questoes']);
        });
    };
    return QuestoesNewComponent;
}());
QuestoesNewComponent = __decorate([
    core_1.Component({
        templateUrl: './questoes-new.component.html',
        styles: ['tbody tr {cursor: pointer}'],
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService,
        router_1.ActivatedRoute,
        router_1.Router])
], QuestoesNewComponent);
exports.QuestoesNewComponent = QuestoesNewComponent;
//# sourceMappingURL=questoes-new.component.js.map