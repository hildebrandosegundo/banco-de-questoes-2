/**
 * Created by hildebrandosegundo on 20/06/17.
 */
import {Component} from '@angular/core';
import {AppHttpService} from '../app/app-http.service';
import {ActivatedRoute} from '@angular/router';
@Component({
    templateUrl: './provagerada.component.html',
    styles: ['tbody tr {cursor: pointer}'],
})
export class provaGeradaComponent {
    public resultado: any = [];
    public CountQuestao: number = 0;
    public prova: Object = {
        area: {},
        nivel: {},
        serie: {},
        categoria: {},
        habilidade: {}
    }
    public questoes: any = {
        data: [],
        total: ''
    };
    constructor(private httpService: AppHttpService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .subscribe((params: any) => {
                this.view(params.id);
            })
    }
    percorrer(obj: any) {
        for (let propriedade in obj) {
            if (obj.hasOwnProperty(propriedade)) {
                if (typeof obj[propriedade] == "object" && obj[propriedade] != null) {
                    this.resultado.push(obj[propriedade]);
                }
            }
        }
    }
    view(id: number) {
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
            })
    }

    parseHTML(questao: any) {
        let vm = '';
        this.CountQuestao++;
        vm += `<li>`;
        if (questao.enunciado || questao.imagem)
            vm +=`<p style="text-align:justify"><span>`+this.CountQuestao + ` . </span>`;
        if (questao.enunciado) {
            vm += questao.enunciado;
        }
        if (questao.imagem) {
            vm += `<div style="display: flex;display: -webkit-flex;justify-content: center;align-items: center;">           
                <img src="` + questao.imagem + `"/>
                </div>`;
        }
        if (questao.enunciado || questao.imagem)
            vm +=`</p><br>`;
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
        for (let i  in this.questoes.data) {
            vm += this.parseHTML(this.questoes.data[i]);
        }
        $('#listaQuestao').append(vm);
    }
}