/**
 * Created by hildebrandosegundo on 06/06/17.
 */
import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
@Component({
    templateUrl: './questoes.component.html',
    styles: ['tbody tr {cursor: pointer}'],
})
export class QuestoesComponent {
    public questoes: Object = {
        data: []
    };
    public user: any;
    constructor (private httpService: AppHttpService) {}
    ngOnInit () {
        this.list();
        ($('.modal') as any).modal();
        if (localStorage['user'])
            this.user = JSON.parse(localStorage['user']);
    }

    list () {
        this.httpService.builder('pquestoes')
            .list({order: 'id,desc'})
            .then((res) => {
                this.questoes = res;
            })
    }

    pageChanged(data: Object) {
        this.questoes = data;
    }
    searched(data: Object) {
        this.questoes = data;
    }
    parseHTML(questao: any) {
        let vm = '';

        if (questao.enunciado || questao.imagem)
            vm += `<DIV>(` + questao.codigo + `)`;
        if (questao.enunciado) {
            vm += questao.enunciado + '</DIV>';
        }

        if (questao.alternativa1 || questao.imagemAl1)
            vm += `<DIV class="input-field">a) `;
        if (questao.alternativa1) {
            vm += questao.alternativa1+ '</DIV>';
        }

        if (questao.alternativa2 || questao.imagemAl2)
            vm += `<DIV class="input-field">b) `;
        if (questao.alternativa2) {
            vm += questao.alternativa2 + '</DIV>';
        }

        if (questao.alternativa3 || questao.imagemAl3)
            vm += `<DIV class="input-field">c) `;
        if (questao.alternativa3) {
            vm += questao.alternativa3 + '</DIV>';
        }

        if (questao.alternativa4 || questao.imagemAl4)
            vm += `<DIV class="input-field">d) `;
        if (questao.alternativa4) {
            vm += questao.alternativa4 + '</DIV>';
        }

        if (questao.alternativa5 || questao.imagemAl5)
            vm += `<DIV class="input-field">e) `;
        if (questao.alternativa5) {
            vm += questao.alternativa5 + '</DIV>';
        }

        return vm;
    }
    openModal(data: any) {
        $('#modal-content1').html(this.parseHTML(data));
        $('#modal1').modal('open');
    }
}