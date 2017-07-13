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
    function provasEditComponent(httpService, route, router, listaQuestao, renderer) {
        this.httpService = httpService;
        this.route = route;
        this.router = router;
        this.listaQuestao = listaQuestao;
        this.renderer = renderer;
        this.resultado = [];
        this.CountQuestoes = 0;
        this.qtdquestao = 50;
        this.prova = {
            serie_id: '',
            area_id: '',
            ano: new Date().getFullYear(),
            titulo: '',
            codigo: '',
            questao1_id: null,
            questao2_id: null,
            questao3_id: null,
            questao4_id: null,
            questao5_id: null,
            questao6_id: null,
            questao7_id: null,
            questao8_id: null,
            questao9_id: null,
            questao10_id: null,
            questao11_id: null,
            questao12_id: null,
            questao13_id: null,
            questao14_id: null,
            questao15_id: null,
            questao16_id: null,
            questao17_id: null,
            questao18_id: null,
            questao19_id: null,
            questao20_id: null,
            questao21_id: null,
            questao22_id: null,
            questao23_id: null,
            questao24_id: null,
            questao25_id: null,
            questao26_id: null,
            questao27_id: null,
            questao28_id: null,
            questao29_id: null,
            questao30_id: null,
            questao31_id: null,
            questao32_id: null,
            questao33_id: null,
            questao34_id: null,
            questao35_id: null,
            questao36_id: null,
            questao37_id: null,
            questao38_id: null,
            questao39_id: null,
            questao41_id: null,
            questao42_id: null,
            questao43_id: null,
            questao44_id: null,
            questao45_id: null,
            questao46_id: null,
            questao47_id: null,
            questao48_id: null,
            questao49_id: null,
            questao50_id: null
        };
        this.questao = {
            data: []
        };
        this.questoes = {
            data: [],
            total: ''
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
        this.route.params
            .subscribe(function (params) {
            _this.view(params.id);
            //this.prova.id = params.id;
        });
        this.listAreas();
        this.listSeries();
        $('.collapsible').collapsible();
        $('.tooltipped').tooltip({ delay: 50 });
        this.sortable(document.getElementById('listaQuestao'), function (item) {
            console.log(item);
        });
    };
    provasEditComponent.prototype.sortable = function (rootEl, onUpdate) {
        var dragEl;
        // Making all siblings movable
        [].slice.call(rootEl.children).forEach(function (itemEl) {
            itemEl.draggable = true;
        });
        // Function responsible for sorting
        function _onDragOver(evt) {
            evt.preventDefault();
            evt.dataTransfer.dropEffect = 'move';
            var target = evt.target;
            if (target && target !== dragEl && target.nodeName == 'LI') {
                // Sorting
                rootEl.insertBefore(dragEl, target.nextSibling || target);
            }
        }
        // End of sorting
        function _onDragEnd(evt) {
            evt.preventDefault();
            dragEl.classList.remove('ghost');
            rootEl.removeEventListener('dragover', _onDragOver, false);
            rootEl.removeEventListener('dragend', _onDragEnd, false);
            // Notification about the end of sorting
            onUpdate(dragEl);
        }
        // Sorting starts
        rootEl.addEventListener('dragstart', function (evt) {
            dragEl = evt.target; // Remembering an element that will be moved
            // Limiting the movement type
            evt.dataTransfer.effectAllowed = 'move';
            evt.dataTransfer.setData('Text', dragEl.textContent);
            // Subscribing to the events at dnd
            rootEl.addEventListener('dragover', _onDragOver, false);
            rootEl.addEventListener('dragend', _onDragEnd, false);
            setTimeout(function () {
                // If this action is performed without setTimeout, then
                // the moved object will be of this class.
                dragEl.classList.add('ghost');
            }, 0);
        }, false);
    };
    provasEditComponent.prototype.percorrer = function (obj) {
        for (var propriedade in obj) {
            if (obj.hasOwnProperty(propriedade)) {
                if (typeof obj[propriedade] == "object" && obj[propriedade] != null) {
                    this.resultado.push(obj[propriedade]);
                }
            }
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
        $('#questao_area').attr('disabled', 'true');
        $('#questao_serie').attr('disabled', 'true');
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
    provasEditComponent.prototype.listQuestao = function (data) {
        var _this = this;
        this.httpService.builder('pquestoes')
            .getQuestao(data)
            .then(function (res) {
            _this.questoes = res;
        });
    };
    provasEditComponent.prototype.view = function (id) {
        var _this = this;
        this.httpService.builder('provas')
            .view(id)
            .then(function (res) {
            _this.prova = res;
            _this.questao.serie_id = res.serie_id;
            _this.questao.area_id = res.area_id;
            _this.percorrer(res);
            for (var i = 2; i < _this.resultado.length; i++) {
                _this.httpService.builder('pquestoes')
                    .getQuestaoIni(_this.resultado[i])
                    .then(function (res) {
                    _this.questoes = res;
                    _this.addQuestaoIni();
                });
            }
        });
    };
    provasEditComponent.prototype.getQuestao = function (data) {
        this.listQuestao(data);
        $('#buttonAdd').addClass('pulse');
        $('#buttonAdd').removeClass('disabled');
    };
    provasEditComponent.prototype.atualizaCount = function () {
        this.CountQuestoes = 0;
        var vm = this;
        $('#listaQuestao li').each(function () {
            vm.CountQuestoes++;
        });
    };
    provasEditComponent.prototype.atualizaNum = function () {
        this.CountQuestoes = 0;
        this.renderer.destroy();
        var vm = this;
        $('#listaQuestao li a').each(function () {
            var _this = this;
            vm.renderer.listen(this, 'click', function (evt) {
                $(_this).closest('li').remove();
                vm.atualizaCount();
            });
            vm.CountQuestoes++;
        });
    };
    provasEditComponent.prototype.parseHTML = function (questao) {
        var vm = '';
        vm += "<li draggable=\"true\" #liquestao value=\"" + questao.id + "\">\n                <div class=\"collapsible-header\">\n                <div class=\"col s11\"><small> #" + questao.codigo + " | Area: " + questao.area.area + " | S\u00E9rie: " + questao.serie.serie + " | N\u00EDvel: " + questao.nivel.nivel + " | Tema: " + questao.categoria.codigo + " Habilidade: " + questao.habilidade.codigo + "</small></div><a class=\"btn-floating btn waves-effect waves-light red\"><div class=\"ion-md-trash\"></div></a>\n                </div>\n                <div class=\"collapsible-body\">";
        if (questao.enunciado) {
            vm += "<div class=\"input-field\">\n                <textarea [(ngModel)]=\"questao.enunciado\" name=\"enuciado\" class=\"materialize-textarea\">" + questao.enunciado + "</textarea>\n                <label class=\"active\">ENUCIADO DA QUEST\u00C3O</label>\n                </div>";
        }
        if (questao.imagem) {
            vm += "<div>           \n                <img src=\"" + questao.imagem + "\"/>\n                </div>";
        }
        if (questao.alternativa1) {
            vm += "<div class=\"input-field\">\n                <textarea [(ngModel)]=\"prova.alternativa1\" name=\"alternativa1\" class=\"materialize-textarea\">" + questao.alternativa1 + "</textarea>\n                <label class=\"active\">1\u00BA ALTERNATIVA</label>\n                </div>";
        }
        if (questao.imagemAl1) {
            vm += "<div>\n                    <img src=\"" + questao.imagemAl1 + "\"/>\n                    </div>";
        }
        if (questao.alternativa2) {
            vm += "<div class=\"input-field\">\n                <textarea [(ngModel)]=\"prova.alternativa2\" name=\"alternativa2\" class=\"materialize-textarea\">" + questao.alternativa2 + "</textarea>\n                <label class=\"active\">2\u00BA ALTERNATIVA</label>\n                </div>";
        }
        if (questao.imagemAl2) {
            vm += "<div>\n                    <img src=\"" + questao.imagemAl2 + "\"/>\n                    </div>";
        }
        if (questao.alternativa3) {
            vm += "<div class=\"input-field\">\n                <textarea [(ngModel)]=\"prova.alternativa3\" name=\"alternativa3\" class=\"materialize-textarea\">" + questao.alternativa3 + "</textarea>\n                <label class=\"active\">3\u00BA ALTERNATIVA</label>\n                </div>";
        }
        if (questao.imagemAl3) {
            vm += "<div>\n                    <img src=\"" + questao.imagemAl3 + "\"/>\n                </div>";
        }
        if (questao.alternativa4) {
            vm += "<div class=\"input-field\">\n                <textarea [(ngModel)]=\"prova.alternativa4\" name=\"alternativa4\" class=\"materialize-textarea\">" + questao.alternativa4 + "</textarea>\n                <label class=\"active\">4\u00BA ALTERNATIVA</label>\n                </div>";
        }
        if (questao.imagemAl4) {
            vm += "<div>\n                    <img src=\"" + questao.imagemAl4 + "\"/>\n                    </div>";
        }
        if (questao.alternativa5) {
            vm += "<div class=\"input-field\">\n                <textarea [(ngModel)]=\"questao.alternativa5\" name=\"alternativa5\" class=\"materialize-textarea\">" + questao.alternativa5 + "</textarea>\n                <label class=\"active\">5\u00BA ALTERNATIVA</label>\n                </div>";
        }
        if (questao.imagemAl5) {
            vm += "<div>              \n                    <img src=\"" + questao.imagemAl5 + "\"/>\n                </div>";
        }
        vm += "</div>\n            </li>";
        return vm;
    };
    provasEditComponent.prototype.addQuestaoIni = function () {
        var vm = '';
        for (var i in this.questoes.data) {
            vm += this.parseHTML(this.questoes.data[i]);
        }
        $('#listaQuestao').append(vm);
        this.atualizaNum();
    };
    provasEditComponent.prototype.addQuestao = function () {
        if (this.qtdquestao > 50) {
            alert('A quantidade de questões utrapassou a quantidade suportada, adeque a quantidade de questões.');
        }
        else {
            if (this.CountQuestoes <= this.qtdquestao) {
                Materialize.toast(this.questoes.total + ' questões encontradas', 4000);
                $('#buttonAdd').removeClass('pulse');
                var vm = '';
                if ($('#aleatorio').is(':checked')) {
                    var questao = this.questoes.data[Math.floor(Math.random() * this.questoes.data.length)];
                    vm = this.parseHTML(questao);
                }
                else {
                    for (var i in this.questoes.data) {
                        vm += this.parseHTML(this.questoes.data[i]);
                    }
                }
                $('#listaQuestao').append(vm);
            }
            else {
                alert('A quantidade de questão ultrapassou a quantidade prevista! Por favor, adeque a quantidade de questões.');
            }
            this.atualizaNum();
        }
    };
    provasEditComponent.prototype.FormDataToJSON = function (key, value) {
        this.prova[key] = value;
    };
    provasEditComponent.prototype.save = function (id) {
        var _this = this;
        if (this.CountQuestoes > 0) {
            var vm_1 = this;
            for (var i = 1; i <= 50; i++) {
                vm_1.FormDataToJSON('questao' + i + '_id', null);
            }
            $('#listaQuestao li').each(function (index, value) {
                vm_1.FormDataToJSON('questao' + (index + 1) + '_id', $(this).val());
            });
            this.prova.codigo = $("#questao_area option:selected").val() + $("#questao_serie option:selected").val() + this.prova.ano + id;
            //console.log(JSON.stringify(this.FormDataToJSON(data)));
            this.httpService.builder('provas')
                .update(id, this.prova)
                .then(function (res) {
                var retVal = confirm("Deseja visualizar a prova?");
                if (retVal == true) {
                    _this.router.navigate(['/provagerada/' + id]);
                }
                else {
                    _this.router.navigate(['/provas/' + id]);
                }
            });
        }
        else {
            alert('Adicione questões!');
        }
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
        router_1.Router,
        core_1.ElementRef,
        core_1.Renderer2])
], provasEditComponent);
exports.provasEditComponent = provasEditComponent;
//# sourceMappingURL=provas-edit.component.js.map