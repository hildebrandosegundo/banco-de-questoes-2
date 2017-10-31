/**
 * Created by hildebrandosegundo on 06/06/17.
 */
import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service'
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
        vm += `<li>`;
        if (questao.enunciado || questao.imagem)
            vm += `<p style="text-align:justify"><span>(` + questao.codigo + `) - </span>`;
        if (questao.enunciado) {
            vm += questao.enunciado;
        }
        if (questao.imagem) {
            vm += `<div style="display: flex;display: -webkit-flex;justify-content: center;align-items: center;">           
                <img src="` + questao.imagem + `"/>
                </div>`;
        }
        if (questao.enunciado || questao.imagem)
            vm += `</p>`;
        if (questao.alternativa1 || questao.imagemAl1)
            vm += `<p style="text-align:justify"><span>a) </span>`;
        if (questao.alternativa1) {
            vm += questao.alternativa1;
        }
        if (questao.imagemAl1) {
            vm += `<div>
                    <img id="img1" src="` + questao.imagemAl1 + `"/>
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
                    <img id="img2" src="` + questao.imagemAl2 + `"/>
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
                   <img id="img3" src="` + questao.imagemAl3 + `"/>
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
                    <img id="img4" src="` + questao.imagemAl4 + `"/>
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
                    <img id="img5" src="` + questao.imagemAl5 + `"/>
                    </div>`;
        }
        if (questao.alternativa5 || questao.imagemAl5)
            vm += `</p>`;
        vm += `</li>`;
        return vm;
    }
    openModal(data: any) {
        $('#modal-content1').html(this.parseHTML(data));
        $('#modal1').modal('open');
    }
}