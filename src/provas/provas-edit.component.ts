/**
 * Created by hildebrandosegundo on 06/06/17.
 */
import {Component, ElementRef, Renderer2} from '@angular/core';
import {AppHttpService} from '../app/app-http.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
    templateUrl: './provas-edit.component.html',
    styles: ['tbody tr {cursor: pointer}'],
})

export class provasEditComponent {
    public source: any;
    public resultado: any = [];
    public CountQuestoes: number = 0;
    public qtdquestao: number = 50;
    public prova: any = {
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
    public questao: any = {
        data: []
    };
    public listQuestoes: any = [];
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

    constructor(private httpService: AppHttpService,
                private route: ActivatedRoute,
                private router: Router,
                private listaQuestao: ElementRef,
                private renderer: Renderer2) {
    }

    ngOnInit() {
        this.route.params
            .subscribe((params: any) => {
                this.view(params.id);
                //this.prova.id = params.id;
            });
        this.listAreas();
        this.listSeries();
        ($('.collapsible')as any).collapsible();
        ($('.tooltipped') as any).tooltip({delay: 50});
        ($('.modal') as any).modal();
    }

    sortable(rootEl: any, onUpdate: any) {
        let dragEl: any;

        // Making all siblings movable
        [].slice.call(rootEl.children).forEach(function (itemEl: any) {
            itemEl.draggable = true;
        });

        // Function responsible for sorting
        function _onDragOver(evt: any) {

            evt.preventDefault();
            evt.dataTransfer.dropEffect = 'move';

            let target = evt.target;
            if (target && target !== dragEl && target.nodeName == 'LI') {
                // Sorting
                rootEl.insertBefore(dragEl, target.nextSibling || target);
            }
        }

        // End of sorting
        function _onDragEnd(evt: any) {
            evt.preventDefault();

            dragEl.classList.remove('ghost');
            rootEl.removeEventListener('dragover', _onDragOver, false);
            rootEl.removeEventListener('dragend', _onDragEnd, false);

            // Notification about the end of sorting
            onUpdate(dragEl);
        }

        // Sorting starts
        rootEl.addEventListener('dragstart', function (evt: any) {
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
            }, 0)
        }, false);
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

    listAreas() {
        this.httpService.builder('areas')
            .list()
            .then((res) => {
                this.areas = res;
            })
    }

    listSeries() {
        this.httpService.builder('series')
            .list()
            .then((res) => {
                this.series = res;
            })
    }

    listNivels(data: any) {
        this.httpService.builder('nivels')
            .getNivel(data)
            .then((res) => {
                this.nivels = res;
            })
    }

    listCategorias(data: any) {
        $('#questao_area').attr('disabled', 'true');
        $('#questao_serie').attr('disabled', 'true');

        this.httpService.builder('categorias')
            .getCategoria(data)
            .then((res) => {
                this.categorias = res;
            })
    }

    listHabilidades(data: any) {
        this.httpService.builder('habilidades')
            .getHabilidade(data)
            .then((res) => {
                this.habilidades = res;
            })
    }

    listQuestao(data: any): any {
        this.httpService.builder('pquestoes')
            .getQuestao(data)
            .then((res) => {
                this.questoes = res;
            });
    }

    view(id: number) {
        this.httpService.builder('provas')
            .view(id)
            .then((res) => {
                this.prova = res;
                this.questao.serie_id = res.serie_id;
                this.questao.area_id = res.area_id;
                this.percorrer(res);
                for (let i = 2; i < this.resultado.length; i++) {
                    this.httpService.builder('pquestoes')
                        .getQuestaoIni(this.resultado[i].id)
                        .then((res) => {
                            this.questoes = res;
                            this.listQuestoes.push(res.data[0].id);
                            this.addQuestaoIni();
                        });
                }
            })
    }

    getQuestao(data: any) {
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
    atualizaNum(): void {
        this.CountQuestoes = 0;
        this.renderer.destroy();
        let vm = this;
        $('#listaQuestao li a').each(function () {
            vm.renderer.listen(this, 'click', (evt) => {
                    $(this).closest('li').remove();
                let i = vm.listQuestoes.indexOf($(this).closest('li').val());
                if(i != -1) {
                    vm.listQuestoes.splice(i, 1);
                }
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
            vm +=  `<label class="active">ENUCIADO DA QUESTÃO</label>`+ questao.enunciado;
        }
        if (questao.imagem) {
            vm += `<div>           
                <img src="` + questao.imagem + `"/>
                </div>`;
        }
        if (questao.alternativa1) {
            vm += `<label class="active">1º ALTERNATIVA</label>` + questao.alternativa1 ;
        }
        if (questao.imagemAl1) {
            vm += `<div>
                    <img src="` + questao.imagemAl1 + `"/>
                    </div>`;
        }
        if (questao.alternativa2) {
            vm += `<label class="active">2º ALTERNATIVA</label>` + questao.alternativa2;
        }
        if (questao.imagemAl2) {
            vm += `<div>
                    <img src="` + questao.imagemAl2 + `"/>
                    </div>`;
        }
        if (questao.alternativa3) {
            vm += `<label class="active">3º ALTERNATIVA</label>` + questao.alternativa3 ;
        }
        if (questao.imagemAl3) {
            vm += `<div>
                    <img src="` + questao.imagemAl3 + `"/>
                </div>`;
        }
        if (questao.alternativa4) {
            vm += `<label class="active">4º ALTERNATIVA</label>` + questao.alternativa4;
        }
        if (questao.imagemAl4) {
            vm += `<div>
                    <img src="` + questao.imagemAl4 + `"/>
                    </div>`;
        }
        if (questao.alternativa5) {
            vm += `<label class="active">5º ALTERNATIVA</label>` + questao.alternativa5;
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
    addQuestaoIni() {
        let vm = '';
        for (let i  in this.questoes.data) {
            vm += this.parseHTML(this.questoes.data[i]);
        }
        $('#listaQuestao').append(vm);
        this.atualizaNum();
    }
    addQuestao() {
        let ch = true;
        if (this.qtdquestao > 50) {
            alert('A quantidade de questões utrapassou a quantidade suportada, adeque a quantidade de questões.');
        }
        else {
            if (this.questoes.data.length>0) {
                if (this.CountQuestoes <= this.qtdquestao) {
                    $('#buttonAdd').removeClass('pulse');
                    let vm = '';
                    if ($('#aleatorio').is(':checked')) {
                        while (ch) {
                            let questao = this.questoes.data[Math.floor(Math.random() * this.questoes.data.length)];
                            this.listQuestoes.forEach(function (el, i) {
                                if (el.id === questao.id) {
                                    // achou!
                                    ch = false;
                                }
                            });
                            if (ch) {
                                ch = false;
                                this.listQuestoes.push(questao.id);
                                vm = this.parseHTML(questao);
                            }
                        }
                    }
                    else {
                        for (let i  in this.questoes.data) {
                            this.listQuestoes.forEach(function(el, i){
                                if(el.id === this.questoes.data[i].id) {
                                    // achou!
                                    ch = false;
                                }
                            });
                            if(ch) {
                                this.listQuestoes.push(this.questoes.data[i].id);
                                vm += this.parseHTML(this.questoes.data[i]);
                            }
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

    save(id: number) {
        if (this.CountQuestoes > 0) {
            let vm = this;
            for(let i=1;i<=50;i++){
                vm.FormDataToJSON('questao' + i + '_id', null);
            }
            $('#listaQuestao li').each(function (index, value) {
                vm.FormDataToJSON('questao' + (index + 1) + '_id', $(this).val());
            });
            this.prova.codigo = $("#questao_area option:selected").val() + $("#questao_serie option:selected").val() + this.prova.ano + id;
            this.httpService.builder('provas')
             .update(id, this.prova)
             .then((res) => {
             let retVal = confirm("Deseja visualizar a prova?");
             if( retVal == true ){
             this.router.navigate(['/provagerada/' + id]);
             }
             else{ this.router.navigate(['/provas/' + id]);}
             })
        } else {
            alert('Adicione questões!');
        }
    }
}