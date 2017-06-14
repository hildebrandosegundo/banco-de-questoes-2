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

    constructor (private httpService: AppHttpService) {}
    ngOnInit () {
        this.list();
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
}