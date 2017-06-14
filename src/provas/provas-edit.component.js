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
var provasEditComponent = (function () {
    function provasEditComponent(httpService, route, router) {
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
            alternativa1: '',
            alternativa2: '',
            alternativa3: '',
            alternativa4: '',
            alternativa5: '',
            area: {},
            nivel: {},
            serie: {},
            categoria: {},
            habilidade: {}
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
    provasEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listAreas();
        this.listSeries();
        this.listNivels(this.questao);
        this.listCategorias(this.questao);
        this.listHabilidades(this.questao);
        this.route.params
            .subscribe(function (params) {
            _this.view(params.id);
        });
    };
    provasEditComponent.prototype.onFileChange = function (e, img) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
            return;
        }
        this.createImage(files[0], img);
    };
    provasEditComponent.prototype.createImage = function (file, img) {
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
    provasEditComponent.prototype.removeImage = function (img) {
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
    provasEditComponent.prototype.listAreas = function () {
        var _this = this;
        this.httpService.builder('areas')
            .list()
            .then(function (res) {
            _this.areas = res;
        });
    };
    provasEditComponent.prototype.listSeries = function () {
        var _this = this;
        this.httpService.builder('series')
            .list()
            .then(function (res) {
            _this.series = res;
        });
    };
    provasEditComponent.prototype.listNivels = function (data) {
        var _this = this;
        this.httpService.builder('nivels')
            .getNivel(data)
            .then(function (res) {
            _this.nivels = res;
        });
    };
    provasEditComponent.prototype.listCategorias = function (data) {
        var _this = this;
        this.httpService.builder('categorias')
            .getCategoria(data)
            .then(function (res) {
            _this.categorias = res;
        });
    };
    provasEditComponent.prototype.listHabilidades = function (data) {
        var _this = this;
        this.httpService.builder('habilidades')
            .getHabilidade(data)
            .then(function (res) {
            _this.habilidades = res;
        });
    };
    provasEditComponent.prototype.view = function (id) {
        var _this = this;
        this.httpService.builder('pquestoes')
            .view(id)
            .then(function (res) {
            _this.questao = res;
        });
    };
    provasEditComponent.prototype.save = function (id) {
        var _this = this;
        console.log(this.questao);
        this.httpService.builder('pquestoes')
            .update(id, this.questao)
            .then(function (res) {
            _this.router.navigate(['/questoes/' + id]);
        });
    };
    return provasEditComponent;
}());
provasEditComponent = __decorate([
    core_1.Component({
        templateUrl: './provas-edit.component.html',
        styles: ['tbody tr {cursor: pointer}'],
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService,
        router_1.ActivatedRoute,
        router_1.Router])
], provasEditComponent);
exports.provasEditComponent = provasEditComponent;
//# sourceMappingURL=provas-edit.component.js.map