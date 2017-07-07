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
const core_1 = require("@angular/core");
const app_http_service_1 = require("../app/app-http.service");
const router_1 = require("@angular/router");
let jsPdf = require('jspdf');
let html2canvas = require('html2canvas');
let provaGeradaComponent = class provaGeradaComponent {
    constructor(httpService, route) {
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
    ngOnInit() {
        this.doc = new jsPdf('p', 'pt', 'letter');
        this.route.params
            .subscribe((params) => {
            this.view(params.id);
        });
    }
    percorrer(obj) {
        for (let propriedade in obj) {
            if (obj.hasOwnProperty(propriedade)) {
                if (typeof obj[propriedade] == "object" && obj[propriedade] != null) {
                    this.resultado.push(obj[propriedade]);
                }
            }
        }
    }
    view(id) {
        this.httpService.builder('provas')
            .view(id)
            .then((res) => {
            this.prova = res;
            this.percorrer(res);
            console.log(this.resultado);
            for (let i = 2; i < this.resultado.length; i++) {
                this.httpService.builder('pquestoes')
                    .getQuestao(this.resultado[i])
                    .then((res) => {
                    this.questoes = res;
                    this.addQuestao();
                });
            }
        });
    }
    parseHTML(questao) {
        let vm = '';
        this.CountQuestao++;
        vm += `<li>`;
        if (questao.enunciado || questao.imagem)
            vm += `<p style="text-align:justify"><span>` + this.CountQuestao + ` . </span>`;
        if (questao.enunciado) {
            vm += questao.enunciado;
        }
        if (questao.imagem) {
            vm += `<div style="display: flex;display: -webkit-flex;justify-content: center;align-items: center;">           
                <img src="` + questao.imagem + `"/>
                </div>`;
        }
        if (questao.enunciado || questao.imagem)
            vm += `</p><br>`;
        if (questao.alternativa1 || questao.imagemAl1)
            vm += `<p style="text-align:justify"><span>a) </span>`;
        if (questao.alternativa1) {
            vm += questao.alternativa1;
        }
        if (questao.imagemAl1) {
            vm += `<div>
                    <img src="` + questao.imagemAl1 + `"/>
                    </div>`;
        }
        if (questao.alternativa1 || questao.imagemAl1)
            vm += `</p>`;
        if (questao.alternativa2 || questao.imagemAl2)
            vm += `<p style="text-align:justify"><span>b) </span>`;
        if (questao.alternativa2) {
            vm += questao.alternativa2;
        }
        if (questao.imagemAl2) {
            vm += `<div>
                    <img src="` + questao.imagemAl2 + `"/>
                    </div>`;
        }
        if (questao.alternativa2 || questao.imagemAl2)
            vm += `</p>`;
        if (questao.alternativa3 || questao.imagemAl3)
            vm += `<p style="text-align:justify"><span>c) </span>`;
        if (questao.alternativa3) {
            vm += questao.alternativa3;
        }
        if (questao.imagemAl3) {
            vm += `<div>
                    <img src="` + questao.imagemAl3 + `"/>
                </div>`;
        }
        if (questao.alternativa3 || questao.imagemAl3)
            vm += `</p>`;
        if (questao.alternativa4 || questao.imagemAl4)
            vm += `<p style="text-align:justify"><span>d) </span>`;
        if (questao.alternativa4) {
            vm += questao.alternativa4;
        }
        if (questao.imagemAl4) {
            vm += `<div>
                    <img src="` + questao.imagemAl4 + `"/>
                    </div>`;
        }
        if (questao.alternativa4 || questao.imagemAl4)
            vm += `</p>`;
        if (questao.alternativa5 || questao.imagemAl5)
            vm += `<p style="text-align:justify"><span>e) </span>`;
        if (questao.alternativa5) {
            vm += questao.alternativa5;
        }
        if (questao.imagemAl5) {
            vm += `<div>              
                    <img src="` + questao.imagemAl5 + `"/>
                </div>`;
        }
        if (questao.alternativa5 || questao.imagemAl5)
            vm += `</p>`;
        vm += `_______________________________________________________________________________________________________________
                </li>`;
        return vm;
    }
    addQuestao() {
        let vm = '';
        for (let i in this.questoes.data) {
            vm += this.parseHTML(this.questoes.data[i]);
        }
        $('#listaQuestao').append(vm);
    }
    ExportDocx() {
        $('#content-prova').wordExport(this.prova.ano + this.prova.bimestre + this.prova.area_id + this.prova.serie_id + this.prova.id);
    }
    ExportPDF() {
        /*let specialElementHandlers = {
         '#content-prova': function(element: any, renderer: any){
         return true;
         }
         };*/
        let quotes = document.getElementById('content-prova');
        let vm = this;
        html2canvas(quotes, {
            onrendered: function (canvas) {
                //! MAKE YOUR PDF
                let pdf = new jsPdf('p', 'pt', 'a4');
                for (let i = 0; i <= quotes.clientHeight / 980; i++) {
                    //! This is all just html2canvas stuff
                    let srcImg = canvas;
                    let sX = 0;
                    let sY = 980 * i; // start 980 pixels down for every new page
                    let sWidth = 900;
                    let sHeight = 980;
                    let dX = 0;
                    let dY = 0;
                    let dWidth = 900;
                    let dHeight = 980;
                    window.onePageCanvas = document.createElement("canvas");
                    window.onePageCanvas.setAttribute('width', 900);
                    window.onePageCanvas.setAttribute('height', 980);
                    let ctx = window.onePageCanvas.getContext('2d');
                    // details on this usage of this function:
                    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
                    ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
                    // document.body.appendChild(canvas);
                    let canvasDataURL = window.onePageCanvas.toDataURL("image/png", 1.0);
                    let width = window.onePageCanvas.width;
                    let height = window.onePageCanvas.clientHeight;
                    //! If we're on anything other than the first page,
                    // add another page
                    if (i > 0) {
                        pdf.addPage(612, 791); //8.5" x 11" in pts (in*72)
                    }
                    //! now we declare that we're working on that page
                    pdf.setPage(i + 1);
                    //! now we add content to that page!
                    pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width * .62), (height * .62));
                }
                //! after the for loop is finished running, we save the pdf.
                pdf.output('save', vm.prova.ano + vm.prova.bimestre + vm.prova.area_id + vm.prova.serie_id + vm.prova.id + '.pdf');
            }
        });
    }
};
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