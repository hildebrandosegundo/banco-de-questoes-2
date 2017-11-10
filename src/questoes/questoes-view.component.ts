/**
 * Created by hildebrandosegundo on 06/06/17.
 */
import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
    templateUrl: './questoes-view.component.html',
    styles: ['tbody tr {cursor: pointer}'],
})
export class QuestoesViewComponent {
    public questao: Object = {
        area: {},
        nivel: {},
        serie: {},
        categoria: {},
        habilidade: {}
    };
    public user: any;
    constructor (
        private httpService: AppHttpService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit () {
        if (localStorage['user'])
            this.user = JSON.parse(localStorage['user']);
        this.route.params
            .subscribe((params:any) => {
                this.view(params.id);
            })
    }

    view (id: number) {
        this.httpService.builder('pquestoes')
            .view(id)
            .then((res) => {
                this.questao = res;
            })
    }

    delete (id: number) {
        this.httpService.builder('pquestoes')
            .delete(id)
            .then(() => {
                this.router.navigate(['/questoes']);
            })
    }
}