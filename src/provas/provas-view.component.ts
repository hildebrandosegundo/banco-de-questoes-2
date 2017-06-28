/**
 * Created by hildebrandosegundo on 06/06/17.
 */
import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
    templateUrl: './provas-view.component.html',
    styles: ['tbody tr {cursor: pointer}'],
})
export class provasViewComponent {
    public prova: Object = {
        area: {},
        nivel: {},
        serie: {},
        categoria: {},
        habilidade: {}
    }

    constructor (
        private httpService: AppHttpService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit () {
        this.route.params
            .subscribe((params:any) => {
                this.view(params.id);
            })
    }

    view (id: number) {
        this.httpService.builder('provas')
            .view(id)
            .then((res) => {
                this.prova = res;
            })
    }

    delete (id: number) {
        this.httpService.builder('provas')
            .delete(id)
            .then(() => {
                this.router.navigate(['/provas']);
            })
    }
}