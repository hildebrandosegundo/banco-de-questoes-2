/**
 * Created by hildebrandosegundo on 06/06/17.
 */
import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service'
@Component({
    templateUrl: './provas.component.html',
    styles: ['tbody tr {cursor: pointer}'],
})
export class provasComponent {
    public provas: Object = {
        data: []
    };

    constructor (private httpService: AppHttpService) {}
    ngOnInit () {
        this.list();
        ($('.tooltipped') as any).tooltip({delay: 50});
    }

    list () {
        this.httpService.builder('provas')
            .list({order: 'id,desc'})
            .then((res) => {
                this.provas = res;
            })
    }

    pageChanged(data: Object) {
        this.provas = data;
    }
    searched(data: Object) {
        this.provas = data;
    }
}