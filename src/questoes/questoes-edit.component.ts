/**
 * Created by hildebrandosegundo on 06/06/17.
 */
import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
    templateUrl: './questoes-edit.component.html',
    styles: ['tbody tr {cursor: pointer}'],
})
export class QuestoesEditComponent {
    public questao: any = {
        codigo: '',
        serie_id: '',
        area_id: '',
        nivel_id: '',
        user_id: '',
        categoria_id: '',
        habilidade_id: '',
        enunciado: '',
        imagem: '',
        imagemAl1: '',
        imagemAl2: '',
        imagemAl3: '',
        imagemAl4: '',
        imagemAl5: '',
        correta: '',
        alternativa1: '',
        alternativa2: '',
        alternativa3: '',
        alternativa4: '',
        alternativa5: '',
        area: {},
        nivel: {},
        serie: {},
        categoria: {},
        habilidade: {}
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
    public user: any;
    constructor (
        private httpService: AppHttpService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit () {
        if (localStorage['user'])
            this.user = JSON.parse(localStorage['user']);
        this.listAreas();
        this.listSeries();
        this.listNivels(this.questao);
        this.listCategorias(this.questao);
        this.listHabilidades(this.questao);
        this.route.params
            .subscribe((params:any) => {
                this.view(params.id);
            });
    }
    onFileChange (e: any, img: number) {
        const files = e.target.files || e.dataTransfer.files;

        if (!files.length) {
            return
        }
        this.createImage(files[0], img)
    }
    createImage (file: any, img: number) {
        const reader = new FileReader();
        const vm = this;
        reader.onload = (e: any) => {
            if (img === 1) { vm.questao.imagem = e.target.result; }
            if (img === 2) { vm.questao.imagemAl1 = e.target.result; }
            if (img === 3) { vm.questao.imagemAl2 = e.target.result; }
            if (img === 4) { vm.questao.imagemAl3 = e.target.result; }
            if (img === 5) { vm.questao.imagemAl4 = e.target.result; }
            if (img === 6) { vm.questao.imagemAl5 = e.target.result; }
        }
        reader.readAsDataURL(file)
    }
    removeImage (img: number) {
        if (img === 1) { this.questao.imagem = '' }
        if (img === 2) { this.questao.imagemAl1 = '' }
        if (img === 3) { this.questao.imagemAl2 = '' }
        if (img === 4) { this.questao.imagemAl3 = '' }
        if (img === 5) { this.questao.imagemAl4 = '' }
        if (img === 6) { this.questao.imagemAl5 = '' }
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

    view (id: number) {
        this.httpService.builder('pquestoes')
            .view(id)
            .then((res) => {
                this.questao = res;
            })
    }
    putCorreta (al: number) {
        this.questao.correta = al;
    }
    save (id: number) {
        if ($("#selectHabilidade option:selected").val()!=null)
            this.questao.codigo = $("#selectArea option:selected").val() + $("#selectSerie option:selected").val() + $("#selectNivel option:selected").text() + $("#selectCategoria option:selected").text().split(' - ')[0] + $("#selectHabilidade option:selected").text().split(' - ')[0];
        this.questao.user_id = JSON.parse(localStorage['user']).id;
        console.log(this.questao.user_id)
        console.log('Envio: '+JSON.stringify(this.questao));
       this.httpService.builder('pquestoes')
            .update(id, this.questao)
            .then((res) => {
                console.log(res);
                this.router.navigate(['/questoes/' + id]);
            })
    }

}