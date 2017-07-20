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
    public listQuestoes: any = [];
    public prova: any = {
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
        ($('.modal') as any).modal();
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
                let i = vm.listQuestoes.indexOf($(this).closest('li').val());
                if(i != -1) {
                    vm.listQuestoes.splice(i, 1);
                }
                    $(this).closest('li').remove();
                    vm.atualizaCount();
            });
            vm.CountQuestoes++;
        });
    }
    reorderQuestoes() {
        this.listQuestoes = [];
        let vm = this;
        $('#ulQuestoes li').each(function () {
            vm.listQuestoes.push($(this).val());
        });
        this.CountQuestoes = 0;
        $('#listaQuestao').html('');
        for (let i = 0; i < this.listQuestoes.length; i++) {
            this.httpService.builder('pquestoes')
                .getQuestaoIni(this.listQuestoes[i])
                .then((res) => {
                    this.questoes = res;
                    this.addQuestaoIni();
                });
        }
    }
    addQuestaoIni() {
        let vm = '';
        for (let i  in this.questoes.data) {
            vm += this.parseHTML(this.questoes.data[i]);
        }
        $('#listaQuestao').append(vm);
        this.atualizaNum();
    }
    parseUlQuestoes() {
        $('#ulQuestoes').html('');
        for(let i=0;i<this.listQuestoes.length;i++) {
            $('#ulQuestoes').append(`<li style="{cursor: move;margin: 1px;padding: 5px 20px;font-size: 20px;background-color: #ccc;}" value="`+ this.listQuestoes[i] +`"># `+ this.listQuestoes[i] +` - Questão `+ (i+1) +`</li>`)
        }
        ($('#ulQuestoes') as any).sortable(document.getElementById('ulQuestoes'), function (item: any) {
            console.log(item);
        });
        $('#modal1').modal('open');

    }
    parseHTML (questao: any) {
        let vm = '';
        vm += `<li #liquestao value="` + questao.id + `">
                <div class="collapsible-header">
                <div class="col s11"><small>#` + questao.id + ` | Código: ` + questao.codigo + ` | Area: ` + questao.area.area + ` | Série: ` + questao.serie.serie + ` | Nível: ` + questao.nivel.nivel + ` | Tema: ` + questao.categoria.codigo +` Habilidade: `+questao.habilidade.codigo+`</small></div><a class="btn-floating btn waves-effect waves-light red"><div class="ion-md-trash"></div></a>
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
            if (this.questoes.data.length>0) {
                if (this.CountQuestoes <= this.qtdquestao) {
                    $('#buttonAdd').removeClass('pulse');
                    let vm = '';
                    if ($('#aleatorio').is(':checked')) {
                        let questao = this.questoes.data[Math.floor(Math.random() * this.questoes.data.length)];
                        this.listQuestoes.push(questao.id);
                        vm = this.parseHTML(questao);
                    }
                    else {
                        for (let i  in this.questoes.data) {
                            this.listQuestoes.push(this.questoes.data[i].id);
                            vm += this.parseHTML(this.questoes.data[i]);
                        }
                    }
                    $('#listaQuestao').append(vm);

                } else {
                    alert('A quantidade de questão ultrapassou a quantidade prevista! Por favor, adeque a quantidade de questões.');
                }
                this.atualizaNum();
            }
            Materialize.toast(this.questoes.total + ' questões encontradas', 4000);
        }
    }
    FormDataToJSON(key: any, value: any) {
        this.prova[key] = value;
    }
    save () {
        if (this.CountQuestoes>0) {
            let vm = this;
            for(let i=1;i<=50;i++){
                vm.FormDataToJSON('questao' + i + '_id', null);
            }
            $('#listaQuestao li').each(function (index, value) {
                vm.FormDataToJSON('questao' + (index + 1) + '_id', $(this).val());
            });
            this.prova.serie_id = $("#questao_serie option:selected").val();
            this.prova.area_id = $("#questao_area option:selected").val();
            let codigo = $("#questao_area option:selected").val() + $("#questao_serie option:selected").val();
            this.httpService.builder('provas')
                .insert(this.prova)
                .then((res) => {
                    vm.prova.codigo = codigo + vm.prova.ano + res.id;
                    vm.httpService.builder('provas')
                        .update(res.id, vm.prova)
                        .then((res) => {
                            let retVal = confirm("Deseja visualizar a prova?");
                            if( retVal == true ){
                                this.router.navigate(['/provagerada/' + res.id]);
                            }
                            else{ this.router.navigate(['/provas']);}
                        })
                })
        }else{
            alert('Adicione questões!');
        }
    }
}