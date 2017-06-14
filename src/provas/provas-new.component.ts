/**
 * Created by hildebrandosegundo on 06/06/17.
 */
import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './provas-new.component.html',
    styles: ['tbody tr {cursor: pointer}'],
})

export class provasNewComponent {
    public prova: any = {
        serie_id: '',
        area_id: '',
        ano: '',
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
        data: []
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
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit () {
        this.listAreas();
        this.listSeries();
        ($('.collapsible') as any).collapsible();
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
    }
    removeQuestao () {
        alert('teste');
    }
    addQuestao (data: any) {

        $('#buttonAdd').removeClass('pulse');
        let vm = '';
        for (let i  in this.questoes.data)
        {
         vm +=  `<li id="`+ this.questoes.data[i].id +`">
        <div class="collapsible-header">
            <div class="col s11"><small>Id: ` + this.questoes.data[i].id + ` | Area: ` + this.questoes.data[i].area.area + ` | Série: ` + this.questoes.data[i].serie.serie + ` | Tema: ` + this.questoes.data[i].categoria.categoria + `</small></div><a onclick="var li = $(this).closest('li'); li.fadeOut(400, function () {li.remove()})" class="btn-floating btn waves-effect waves-light red"><div class="ion-md-trash"></div></a>
        </div>
        <div class="collapsible-body">
            <div *ngIf="`+this.questoes.data[i].enunciado+`" class="input-field">
                <textarea [(ngModel)]="questao.enunciado" name="enuciado" class="materialize-textarea">`+this.questoes.data[i].enunciado+`</textarea>
                <label class="active">ENUCIADO DA QUESTÃO</label>
            </div>
            <div>
                <div *ngIf="`+this.questoes.data[i].imagem+`">
                    <img src="`+this.questoes.data[i].imagem+`"/>
                </div>
            </div>

            <div *ngIf="`+this.questoes.data[i].alternativa1+`" class="input-field">
                <textarea [(ngModel)]="prova.alternativa1" name="alternativa1" class="materialize-textarea">`+this.questoes.data[i].alternativa1+`</textarea>
                <label class="active">1º ALTERNATIVA</label>
            </div>
            <div>
                <div *ngIf="`+this.questoes.data[i].imagemAl1+`">
                    <img src="`+this.questoes.data[i].imagemAl1+`"/>
                </div>
            </div>
            <div *ngIf="`+this.questoes.data[i].alternativa2+`" class="input-field">
                <textarea [(ngModel)]="prova.alternativa2" name="alternativa2" class="materialize-textarea">`+this.questoes.data[i].alternativa2+`</textarea>
                <label class="active">2º ALTERNATIVA</label>
            </div>
            <div>
                <div *ngIf="`+this.questoes.data[i].imagemAl2+`">
                    <img src="`+this.questoes.data[i].imagemAl2+`"/>
                </div>
            </div>
            <div *ngIf="`+this.questoes.data[i].alternativa3+`" class="input-field">
                <textarea [(ngModel)]="prova.alternativa3" name="alternativa3" class="materialize-textarea">`+this.questoes.data[i].alternativa3+`</textarea>
                <label class="active">3º ALTERNATIVA</label>
            </div>
            <div>
                <div *ngIf="`+this.questoes.data[i].imagemAl3+`">
                    <img src="`+this.questoes.data[i].imagemAl3+`"/>
                </div>
            </div>
            <div *ngIf="`+this.questoes.data[i].alternativa4+`" class="input-field">
                <textarea [(ngModel)]="prova.alternativa4" name="alternativa4" class="materialize-textarea">`+this.questoes.data[i].alternativa4+`</textarea>
                <label class="active">4º ALTERNATIVA</label>
            </div>
            <div>
                <div *ngIf="`+this.questoes.data[i].imagemAl4+`">
                    <img src="`+this.questoes.data[i].imagemAl4+`"/>
                </div>
            </div>
            <div *ngIf="`+this.questoes.data[i].alternativa5+`" class="input-field">
                <textarea [(ngModel)]="questao.alternativa5" name="alternativa5" class="materialize-textarea">`+ this.questoes.data[i].alternativa5 +`</textarea>
                <label class="active">5º ALTERNATIVA</label>
            </div>
            <div>
                <div *ngIf="`+this.questoes.data[i].imagemAl5+`">
                    <img src="`+this.questoes.data[i].imagemAl5+`"/>
                </div>
            </div>
        </div>
    </li>`
        }
        $('#listaQuestao').append(vm);
    }
    save () {
        this.httpService.builder('provas')
            .insert(this.prova)
            .then((res) => {
                this.router.navigate(['/provas']);
            })
    }
}