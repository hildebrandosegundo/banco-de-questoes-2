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
    function provasNewComponent(httpService, router, 
        /*
                private listaQuestao:ElementRef,
        */
        renderer) {
        this.httpService = httpService;
        this.router = router;
        this.renderer = renderer;
        this.CountQuestoes = 0;
        this.CountQuestao = 0;
        this.qtdquestao = 30;
        this.listQuestoes = [];
        this.prova = {
            serie_id: '',
            area_id: '',
            ano: new Date().getFullYear(),
            titulo: '',
            codigo: '',
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
    provasNewComponent.prototype.ngOnInit = function () {
        this.listAreas();
        this.listSeries();
        $('.collapsible').collapsible();
        $('.tooltipped').tooltip({ delay: 50 });
        $('.modal').modal();
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
        this.httpService.builder('pquestoes')
            .getNivel1(data)
            .then(function (res) {
            _this.nivels = res;
        });
    };
    provasNewComponent.prototype.listCategorias = function (data) {
        var _this = this;
        $('#questao_area').attr('disabled', 'true');
        $('#questao_serie').attr('disabled', 'true');
        this.httpService.builder('pquestoes')
            .getCategoria1(data)
            .then(function (res) {
            _this.categorias = res;
        });
    };
    provasNewComponent.prototype.listHabilidades = function (data) {
        var _this = this;
        this.httpService.builder('pquestoes')
            .getHabilidade1(data)
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
        $('#buttonAdd').removeClass('disabled');
    };
    provasNewComponent.prototype.atualizaCount = function () {
        this.CountQuestoes = 0;
        var vm = this;
        $('#listaQuestao li').each(function () {
            vm.CountQuestoes++;
        });
    };
    provasNewComponent.prototype.atualizaNum = function () {
        this.CountQuestoes = 0;
        this.renderer.destroy();
        var vm = this;
        $('#listaQuestao li a').each(function () {
            var _this = this;
            vm.renderer.listen(this, 'click', function (evt) {
                var i = vm.listQuestoes.indexOf($(_this).closest('li').val());
                if (i != -1) {
                    vm.listQuestoes.splice(i, 1);
                }
                $(_this).closest('li').remove();
                vm.atualizaCount();
            });
            vm.CountQuestoes++;
        });
    };
    provasNewComponent.prototype.reorderQuestoes = function () {
        var _this = this;
        this.listQuestoes = [];
        var vm = this;
        $('#ulQuestoes li').each(function () {
            vm.listQuestoes.push($(this).val());
        });
        this.CountQuestoes = 0;
        $('#listaQuestao').html('');
        for (var i = 0; i < this.listQuestoes.length; i++) {
            this.httpService.builder('pquestoes')
                .getQuestaoIni(this.listQuestoes[i])
                .then(function (res) {
                _this.questoes = res;
                _this.addQuestaoIni();
            });
        }
    };
    provasNewComponent.prototype.addQuestaoIni = function () {
        var vm = '';
        for (var i in this.questoes.data) {
            vm += this.parseHTML(this.questoes.data[i]);
        }
        $('#listaQuestao').append(vm);
        this.atualizaNum();
    };
    provasNewComponent.prototype.parseUlQuestoes = function () {
        $('#ulQuestoes').html('');
        for (var i = 0; i < this.listQuestoes.length; i++) {
            $('#ulQuestoes').append("<li style=\"{cursor: move;margin: 1px;padding: 5px 20px;font-size: 20px;background-color: #ccc;}\" value=\"" + this.listQuestoes[i] + "\"># " + this.listQuestoes[i] + " - Quest\u00E3o " + (i + 1) + "</li>");
        }
        $('#ulQuestoes').sortable(document.getElementById('ulQuestoes'), function (item) {
            console.log(item);
        });
        $('#modal1').modal('open');
    };
    provasNewComponent.prototype.parsePreview = function () {
        var _this = this;
        $('#modal-content2').html('');
        this.CountQuestao = 0;
        for (var i = 0; i < this.listQuestoes.length; i++) {
            this.httpService.builder('pquestoes')
                .getQuestaoIni(this.listQuestoes[i])
                .then(function (res) {
                _this.questoes = res;
                _this.addQuestao_prev();
            });
        }
        $('#modal2').modal('open');
    };
    provasNewComponent.prototype.addQuestao_prev = function () {
        var vm = '';
        for (var i in this.questoes.data) {
            vm += this.parseHTML_prev(this.questoes.data[i]);
        }
        $('#modal-content2').append(vm);
    };
    provasNewComponent.prototype.parseHTML_prev = function (questao) {
        var vm = '';
        this.CountQuestao++;
        if (questao.enunciado || questao.imagem)
            vm += "<p style=\"text-align:justify\"><span>" + this.CountQuestao + " . (" + questao.codigo + ") </span>";
        if (questao.enunciado) {
            vm += questao.enunciado;
        }
        if (questao.enunciado || questao.imagem)
            vm += "</p><br>";
        if (questao.alternativa1 || questao.imagemAl1)
            vm += "<p style=\"text-align:justify\"><span>a) </span>";
        if (questao.alternativa1) {
            vm += questao.alternativa1;
        }
        if (questao.alternativa1 || questao.imagemAl1)
            vm += "</p>";
        if (questao.alternativa2 || questao.imagemAl2)
            vm += "<p style=\"text-align:justify\"><span>b) </span>";
        if (questao.alternativa2) {
            vm += questao.alternativa2;
        }
        if (questao.alternativa2 || questao.imagemAl2)
            vm += "</p>";
        if (questao.alternativa3 || questao.imagemAl3)
            vm += "<p style=\"text-align:justify\"><span>c) </span>";
        if (questao.alternativa3) {
            vm += questao.alternativa3;
        }
        if (questao.alternativa3 || questao.imagemAl3)
            vm += "</p>";
        if (questao.alternativa4 || questao.imagemAl4)
            vm += "<p style=\"text-align:justify\"><span>d) </span>";
        if (questao.alternativa4) {
            vm += questao.alternativa4;
        }
        if (questao.alternativa4 || questao.imagemAl4)
            vm += "</p>";
        if (questao.alternativa5 || questao.imagemAl5)
            vm += "<p style=\"text-align:justify\"><span>e) </span>";
        if (questao.alternativa5) {
            vm += questao.alternativa5;
        }
        if (questao.alternativa5 || questao.imagemAl5)
            vm += "</p>";
        vm += "___________________________________________________________________________";
        return vm;
    };
    provasNewComponent.prototype.parseHTML = function (questao) {
        var vm = '';
        vm += "<li #liquestao value=\"" + questao.id + "\">\n                <div class=\"collapsible-header\">\n                <div class=\"col s11\"><small>#" + questao.id + " | C\u00F3digo: " + questao.codigo + " | Area: " + questao.area.area + " | S\u00E9rie: " + questao.serie.serie + " | N\u00EDvel: " + questao.nivel.nivel + " | Tema: " + questao.categoria.codigo + " Habilidade: " + questao.habilidade.codigo + "</small></div><a class=\"btn-floating btn waves-effect waves-light red\"><div class=\"ion-md-trash\"></div></a>\n                </div>\n                <div class=\"collapsible-body\">";
        if (questao.enunciado) {
            vm += "<label class=\"active\">ENUCIADO DA QUEST\u00C3O</label>" + questao.enunciado;
        }
        if (questao.imagem) {
            vm += "<div>           \n                <img src=\"" + questao.imagem + "\"/>\n                </div>";
        }
        if (questao.alternativa1) {
            vm += "<label class=\"active\">1\u00BA ALTERNATIVA</label>" + questao.alternativa1;
        }
        if (questao.imagemAl1) {
            vm += "<div>\n                    <img src=\"" + questao.imagemAl1 + "\"/>\n                    </div>";
        }
        if (questao.alternativa2) {
            vm += "<label class=\"active\">2\u00BA ALTERNATIVA</label>" + questao.alternativa2;
        }
        if (questao.imagemAl2) {
            vm += "<div>\n                    <img src=\"" + questao.imagemAl2 + "\"/>\n                    </div>";
        }
        if (questao.alternativa3) {
            vm += "<label class=\"active\">3\u00BA ALTERNATIVA</label>" + questao.alternativa3;
        }
        if (questao.imagemAl3) {
            vm += "<div>\n                    <img src=\"" + questao.imagemAl3 + "\"/>\n                </div>";
        }
        if (questao.alternativa4) {
            vm += "<label class=\"active\">4\u00BA ALTERNATIVA</label>" + questao.alternativa4;
        }
        if (questao.imagemAl4) {
            vm += "<div>\n                    <img src=\"" + questao.imagemAl4 + "\"/>\n                    </div>";
        }
        if (questao.alternativa5) {
            vm += "<label class=\"active\">5\u00BA ALTERNATIVA</label>" + questao.alternativa5;
        }
        if (questao.imagemAl5) {
            vm += "<div>              \n                    <img src=\"" + questao.imagemAl5 + "\"/>\n                </div>";
        }
        vm += "</div>\n            </li>";
        return vm;
    };
    provasNewComponent.prototype.procurarIndice = function (arraySearch, valor) {
        var cont = 0;
        var indices = [];
        for (var i in arraySearch) {
            var row = arraySearch[i];
            if (row == valor) {
                indices.push(cont);
            }
            cont++;
        }
        return indices;
    };
    provasNewComponent.prototype.addQuestao = function () {
        var ch = true;
        if (this.qtdquestao > 50) {
            alert('A quantidade de questões utrapassou a quantidade suportada, adeque a quantidade de questões.');
        }
        else {
            if (this.questoes.data.length > 0) {
                if (this.CountQuestoes < this.qtdquestao) {
                    $('#buttonAdd').removeClass('pulse');
                    var vm = '';
                    if ($('#aleatorio').is(':checked')) {
                        while (ch) {
                            var questao = this.questoes.data[Math.floor(Math.random() * this.questoes.data.length)];
                            console.log('antes do if');
                            if (this.procurarIndice(this.listQuestoes, questao.id).length > 0) {
                                // achou!
                                console.log('entrou no if');
                                ch = false;
                            }
                            if (ch) {
                                ch = false;
                                this.listQuestoes.push(questao.id);
                                vm = this.parseHTML(questao);
                            }
                        }
                    }
                    else {
                        for (var i in this.questoes.data) {
                            if (this.procurarIndice(this.listQuestoes, this.questoes.data[i].id).length > 0) {
                                // achou!
                                console.log('entrou no if');
                                ch = false;
                            }
                            if (ch) {
                                this.listQuestoes.push(this.questoes.data[i].id);
                                vm += this.parseHTML(this.questoes.data[i]);
                            }
                        }
                    }
                    $('#listaQuestao').append(vm);
                }
                else {
                    Materialize.toast('A quantidade de questão ultrapassou a quantidade prevista! Por favor, adeque a quantidade de questões.', 5000, 'rounded');
                }
                this.atualizaNum();
            }
            Materialize.toast(this.questoes.total + ' questões encontradas', 4000);
        }
    };
    provasNewComponent.prototype.FormDataToJSON = function (key, value) {
        this.prova[key] = value;
    };
    provasNewComponent.prototype.save = function () {
        var _this = this;
        if (this.CountQuestoes > 0) {
            var vm_1 = this;
            for (var i = 1; i <= 50; i++) {
                vm_1.FormDataToJSON('questao' + i + '_id', null);
            }
            $('#listaQuestao li').each(function (index, value) {
                vm_1.FormDataToJSON('questao' + (index + 1) + '_id', $(this).val());
            });
            this.prova.serie_id = $("#questao_serie option:selected").val();
            this.prova.area_id = $("#questao_area option:selected").val();
            var codigo_1 = $("#questao_area option:selected").val() + $("#questao_serie option:selected").val();
            this.httpService.builder('provas')
                .insert(this.prova)
                .then(function (res) {
                vm_1.prova.codigo = codigo_1 + vm_1.prova.ano + res.id;
                vm_1.httpService.builder('provas')
                    .update(res.id, vm_1.prova)
                    .then(function (res) {
                    var retVal = confirm("Deseja visualizar a prova?");
                    if (retVal == true) {
                        _this.router.navigate(['/provagerada/' + res.id]);
                    }
                    else {
                        _this.router.navigate(['/provas']);
                    }
                });
            });
        }
        else {
            alert('Adicione questões!');
        }
    };
    return provasNewComponent;
}());
provasNewComponent = __decorate([
    core_1.Component({
        templateUrl: './provas-new.component.html',
        styles: ['tbody tr {cursor: pointer}'],
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService,
        router_1.Router,
        core_1.Renderer2])
], provasNewComponent);
exports.provasNewComponent = provasNewComponent;
//# sourceMappingURL=provas-new.component.js.map