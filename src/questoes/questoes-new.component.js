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
const core_1 = require("@angular/core");
const app_http_service_1 = require("../app/app-http.service");
const router_1 = require("@angular/router");
let QuestoesNewComponent = class QuestoesNewComponent {
    constructor(httpService, route, router) {
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
    ngOnInit() {
        this.listAreas();
        this.listSeries();
    }
    onFileChange(e, img) {
        const files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
            return;
        }
        this.createImage(files[0], img);
    }
    createImage(file, img) {
        const reader = new FileReader();
        const vm = this;
        reader.onload = (e) => {
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
    }
    removeImage(img) {
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
    }
    listAreas() {
        this.httpService.builder('areas')
            .list()
            .then((res) => {
            this.areas = res;
        });
    }
    listSeries() {
        this.httpService.builder('series')
            .list()
            .then((res) => {
            this.series = res;
        });
    }
    listNivels(data) {
        this.httpService.builder('nivels')
            .getNivel(data)
            .then((res) => {
            this.nivels = res;
        });
    }
    listCategorias(data) {
        this.httpService.builder('categorias')
            .getCategoria(data)
            .then((res) => {
            this.categorias = res;
        });
    }
    listHabilidades(data) {
        this.httpService.builder('habilidades')
            .getHabilidade(data)
            .then((res) => {
            this.habilidades = res;
        });
    }
    /* view (id: number) {
         this.httpService.builder('pquestoes')
             .view(id)
             .then((res) => {
                 this.questao = res;
             })
     }*/
    save() {
        this.httpService.builder('pquestoes')
            .insert(this.questao)
            .then((res) => {
            this.router.navigate(['/questoes']);
        });
    }
};
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