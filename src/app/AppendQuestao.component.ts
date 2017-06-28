import {AppHttpService} from "./app-http.service";
import {Component, Injectable} from "@angular/core";

/**
 * Created by hildebrandosegundo on 20/06/17.
 */
@Injectable()
@Component({
    selector: 'append-questao',
    template: `<li *ngFor="let questao of questoes.data" #appendQuestao>
        <div class="collapsible-header">
            <div class="col s11"><small>Id: {{questao.id}} | Area: {{questao.area.area}} | Série: {{questao.serie.serie}} | Tema: {{questao.categoria.categoria}}</small></div><a (click)="removeLi()" class="btn-floating btn waves-effect waves-light red"><div class="center ion-md-trash"></div></a>
        </div>
        <div class="collapsible-body">
            <div *ngIf="questao.enunciado" class="input-field">
                <textarea [(ngModel)]="questao.enunciado" name="enuciado" class="materialize-textarea">{{questao.enunciado}}</textarea>
                <label class="active">ENUCIADO DA QUESTÃO</label>
            </div>
            <div>
                <div *ngIf="questao.imagem">
                    <img [src]="questao.imagem"/>
                </div>
            </div>

            <div *ngIf="questao.alternativa1" class="input-field">
                <textarea [(ngModel)]="prova.alternativa1" name="alternativa1" class="materialize-textarea">{{questao.alternativa1}}</textarea>
                <label class="active">1º ALTERNATIVA</label>
            </div>
            <div>
                <div *ngIf="questao.imagemAl1">
                    <img [src]="questao.imagemAl1"/>
                </div>
            </div>
            <div *ngIf="questao.alternativa2" class="input-field">
                <textarea [(ngModel)]="prova.alternativa2" name="alternativa2" class="materialize-textarea">{{questao.alternativa2}}</textarea>
                <label class="active">2º ALTERNATIVA</label>
            </div>
            <div>
                <div *ngIf="questao.imagemAl2">
                    <img [src]="questao.imagemAl2"/>
                </div>
            </div>
            <div *ngIf="questao.alternativa3" class="input-field">
                <textarea [(ngModel)]="prova.alternativa3" name="alternativa3" class="materialize-textarea">{{questao.alternativa3}}</textarea>
                <label class="active">3º ALTERNATIVA</label>
            </div>
            <div>
                <div *ngIf="questao.imagemAl3">
                    <img [src]="questao.imagemAl3"/>
                </div>
            </div>
            <div *ngIf="questao.alternativa4" class="input-field">
                <textarea [(ngModel)]="prova.alternativa4" name="alternativa4" class="materialize-textarea">{{questao.alternativa4}}</textarea>
                <label class="active">4º ALTERNATIVA</label>
            </div>
            <div>
                <div *ngIf="questao.imagemAl4">
                    <img [src]="questao.imagemAl4"/>
                </div>
            </div>
            <div *ngIf="questao.alternativa5" class="input-field">
                <textarea [(ngModel)]="questao.alternativa5" name="alternativa5" class="materialize-textarea">{{questao.alternativa5}}</textarea>
                <label class="active">5º ALTERNATIVA</label>
            </div>
            <div>
                <div *ngIf="questao.imagemAl5">
                    <img [src]="questao.imagemAl5"/>
                </div>
            </div>
        </div>
    </li>`
})

export class AppendQuestaoComponent {
    public questoes: any = {
        data: [],
        total: ''
    };

    constructor(private httpService: AppHttpService){}

    removeLi() {
        alert('teste');
    }

    listQuestao(data: any) {
        this.httpService.builder('pquestoes')
            .getQuestao(data)
            .then((res) => {
                this.questoes = res;
            })
    }

}