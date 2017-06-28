/**
 * Created by hildebrandosegundo on 06/06/17.
 */
import {Component, ElementRef, Renderer2} from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import { Router} from '@angular/router';
@Component({
    templateUrl: './provas-new.component.html',
    styles: ['tbody tr {cursor: pointer}'],
})

export class provasNewComponent {
    public CountQuestoes: number = 0;
    public qtdquestao: number = 30;
    public prova: any = {
        serie_id: '',
        area_id: '',
        ano: new Date().getFullYear(),
        bimestre: '',
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
    public questao: any = {
        data: []
    };
    public questoes: any = {
        data: [],
        total: ''
    };
    public areas: Object = {
        data: []
    };
    public series: Object = {
        data: []
    };
    public nivels: Object = {
        data: []
    };
    public categorias: Object = {
        data: []
    };
    public habilidades: Object = {
        data: []
    };
    constructor (
        private httpService: AppHttpService,
        private router: Router,
        private listaQuestao:ElementRef,
        private renderer: Renderer2
    ) {}

    ngOnInit () {
        this.listAreas();
        this.listSeries();
        ($('.collapsible')as any).collapsible();
        ($('.tooltipped') as any).tooltip({delay: 50});
    }

    listAreas () {
        this.httpService.builder('areas')
            .list()
            .then((res) => {
                this.areas = res;
            })
    }
    listSeries () {
        this.httpService.builder('series')
            .list()
            .then((res) => {
                this.series = res;
            })
    }
    listNivels (data: any) {
        this.httpService.builder('nivels')
            .getNivel(data)
            .then((res) => {
                this.nivels = res;
            })
    }
    listCategorias (data: any) {
        $('#questao_area').attr('disabled', 'true');
        $('#questao_serie').attr('disabled', 'true');

        this.httpService.builder('categorias')
            .getCategoria(data)
            .then((res) => {
                this.categorias = res;
            })
    }
    listHabilidades (data: any) {
        this.httpService.builder('habilidades')
            .getHabilidade(data)
            .then((res) => {
                this.habilidades = res;
            })
    }

    listQuestao (data: any) {
        this.httpService.builder('pquestoes')
            .getQuestao(data)
            .then((res) => {
                this.questoes = res;
            })
    }
    getQuestao (data: any) {
        this.listQuestao(data);
        $('#buttonAdd').addClass('pulse');
        $('#buttonAdd').removeClass('disabled');
    }
    atualizaCount(): void {
        this.CountQuestoes = 0;
        let vm = this;
        $('#listaQuestao li').each(function () {
            vm.CountQuestoes++;
        });
    }
    atualizaNum(): void{
        this.CountQuestoes = 0;
        this.renderer.destroy();
        let vm = this;
        $('#listaQuestao li a').each(function () {
            vm.renderer.listen(this, 'click', (evt) => {
                $(this).closest('li').remove();
                vm.atualizaCount();
            });
            vm.CountQuestoes++;
        });
    }
    parseHTML (questao: any) {
        let vm = '';
        vm += `<li #liquestao value="` + questao.id + `">
                <div class="collapsible-header">
                <div class="col s11"><small>Id: ` + questao.id + ` | Area: ` + questao.area.area + ` | Série: ` + questao.serie.serie + ` | Tema: ` + questao.categoria.categoria + `</small></div><a class="btn-floating btn waves-effect waves-light red"><div class="ion-md-trash"></div></a>
                </div>
                <div class="collapsible-body">`;
        if (questao.enunciado) {
            vm += `<div class="input-field">
                <textarea [(ngModel)]="questao.enunciado" name="enuciado" class="materialize-textarea">` + questao.enunciado + `</textarea>
                <label class="active">ENUCIADO DA QUESTÃO</label>
                </div>`;
        }
        if (questao.imagem) {
            vm += `<div>           
                <img src="` + questao.imagem + `"/>
                </div>`;
        }
        if (questao.alternativa1) {
            vm += `<div class="input-field">
                <textarea [(ngModel)]="prova.alternativa1" name="alternativa1" class="materialize-textarea">` + questao.alternativa1 + `</textarea>
                <label class="active">1º ALTERNATIVA</label>
                </div>`;
        }
        if (questao.imagemAl1) {
            vm += `<div>
                    <img src="` + questao.imagemAl1 + `"/>
                    </div>`;
        }
        if (questao.alternativa2) {
            vm += `<div class="input-field">
                <textarea [(ngModel)]="prova.alternativa2" name="alternativa2" class="materialize-textarea">` + questao.alternativa2 + `</textarea>
                <label class="active">2º ALTERNATIVA</label>
                </div>`;
        }
        if (questao.imagemAl2) {
            vm += `<div>
                    <img src="` + questao.imagemAl2 + `"/>
                    </div>`;
        }
        if (questao.alternativa3) {
            vm += `<div class="input-field">
                <textarea [(ngModel)]="prova.alternativa3" name="alternativa3" class="materialize-textarea">` + questao.alternativa3 + `</textarea>
                <label class="active">3º ALTERNATIVA</label>
                </div>`;
        }
        if (questao.imagemAl3) {
            vm += `<div>
                    <img src="` + questao.imagemAl3 + `"/>
                </div>`;
        }
        if (questao.alternativa4) {
            vm += `<div class="input-field">
                <textarea [(ngModel)]="prova.alternativa4" name="alternativa4" class="materialize-textarea">` + questao.alternativa4 + `</textarea>
                <label class="active">4º ALTERNATIVA</label>
                </div>`;
        }
        if (questao.imagemAl4) {
            vm += `<div>
                    <img src="` + questao.imagemAl4 + `"/>
                    </div>`;
        }
        if (questao.alternativa5) {
            vm += `<div class="input-field">
                <textarea [(ngModel)]="questao.alternativa5" name="alternativa5" class="materialize-textarea">` + questao.alternativa5 + `</textarea>
                <label class="active">5º ALTERNATIVA</label>
                </div>`;
        }
        if (questao.imagemAl5) {
            vm += `<div>              
                    <img src="` + questao.imagemAl5 + `"/>
                </div>`;
        }
        vm += `</div>
            </li>`;
        return vm;
    }
    addQuestao () {
        if (this.qtdquestao>50){
            alert('A quantidade de questões utrapassou a quantidade suportada, adeque a quantidade de questões.');
        }
        else {
            if (this.CountQuestoes <= this.qtdquestao) {
                Materialize.toast(this.questoes.total + ' questões encontradas', 4000);
                $('#buttonAdd').removeClass('pulse');
                let vm = '';
                if ($('#aleatorio').is(':checked')) {
                    let questao = this.questoes.data[Math.floor(Math.random() * this.questoes.data.length)];
                    vm = this.parseHTML(questao);
                }
                else {
                    for (let i  in this.questoes.data) {
                        vm += this.parseHTML(this.questoes.data[i]);
                    }
                }
                $('#listaQuestao').append(vm);

            } else {
                alert('A quantidade de questão ultrapassou a quantidade prevista! Por favor, adeque a quantidade de questões.');
            }
            this.atualizaNum();
        }
    }

    save () {
        let data = new FormData()
        if (this.CountQuestoes>0) {
            let vm = this;
            data.append('serie_id', this.questao.serie_id);
            data.append('area_id', this.questao.area_id);
            $('#listaQuestao li').each(function (index, value) {
                data.append('questao'+(index+1)+'_id', $(this).val())
            });
            data.append('ano', this.prova.ano);
            data.append('bimestre', this.prova.bimestre);
            this.httpService.builder('provas')
                .insert(data)
                .then((res) => {
                    this.router.navigate(['/provas']);
                })
        }else{
            alert('Adicione questões!');
        }
    }
}