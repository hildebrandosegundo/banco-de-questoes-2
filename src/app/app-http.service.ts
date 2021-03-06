/**
 * Created by hildebrandosegundo on 06/06/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

interface Options {
    limit?:number;
    page?:number;
    order?:string;
}
interface RequestOptions {
    headers?:any;
}
@Injectable()
export class AppHttpService {
    private url: string;
    private options: RequestOptions = {};
    constructor (private http: Http) {}

    setAccessToken (token: string) {
        let header = new Headers({'Authorization': 'Bearer ' + token});
        this.options.headers = header;
    }

    client(url: string) {
        //this.url = 'http://localhost:8000/' + url;
        this.url = 'http://www.dmei.96.lt/laravel/public/' + url;
        return this;
    }

    builder (resource: string) {
        //this.url = 'http://localhost:8000/api/' + resource;
        this.url = 'http://www.dmei.96.lt/laravel/public/api/' + resource;
        return this;
    }

    list (options: Options = {}) {
        let url = this.url;

        if (options.limit === undefined) {
            options.limit = 20;
        }

        if (options.page === undefined) {
            options.page = 1;
        }
        if (options.order === undefined) {
            options.order = 'id,asc';
        }
        url += '?limit=' + options.limit;
        url += '&page=' + options.page;
        url += '&order=' + options.order;

        return this.http.get(url, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    view (id: number) {
        return this.http.get(this.url + '/' + id, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    update (id: number, data: any) {
        return this.http.put(this.url + '/' + id, data, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    insert (data: any) {
        return this.http.post(this.url, data, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    delete (id: number) {
        return this.http.delete(this.url + '/' + id, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    search (term: string) {
        return this.http.get(this.url + '?like=codigo,' + term, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getNivel (data: any) {
        return this.http.get(this.url + '?where[serie_id]=' + data.serie_id + '&where[area_id]=' + data.area_id, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getCategoria (data: any) {
        return this.http.get(this.url + '?where[serie_id]=' + data.serie_id + '&where[area_id]=' + data.area_id + '&where[nivel_id]=' + data.nivel_id, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getHabilidade (data: any) {
        return this.http.get(this.url + '?where[serie_id]=' + data.serie_id + '&where[area_id]=' + data.area_id + '&where[categoria_id]=' + data.categoria_id, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getQuestao (data: any) {
        return this.http.get(this.url + '?where[serie_id]=' + data.serie_id + '&where[area_id]=' + data.area_id + '&where[categoria_id]=' + data.categoria_id + '&where[habilidade_id]=' + data.habilidade_id, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getArea1 (data: any) {
        return this.http.get(this.url + '?where[area_id]=' + data.area_id, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getSerie1 (data: any) {
        return this.http.get(this.url + '?where[serie_id]=' + data.serie_id, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getNivel1 (data: any) {
        return this.http.get(this.url + '?where[area_id]=' + data.area_id + '&where[serie_id]=' + data.serie_id + '&select=nivel_id&groupby=nivel_id&order=nivel_id', this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getCategoria1 (data: any) {
        return this.http.get(this.url + '?where[serie_id]=' + data.serie_id + '&where[area_id]=' + data.area_id + '&where[nivel_id]=' + data.nivel_id + '&select=categoria_id&groupby=categoria_id' , this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getHabilidade1 (data: any) {
        return this.http.get(this.url + '?where[serie_id]=' + data.serie_id + '&where[area_id]=' + data.area_id + '&where[categoria_id]=' + data.categoria_id + '&select=habilidade_id&groupby=habilidade_id', this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getNivel2 () {
        return this.http.get(this.url + '?select=nivel_id&groupby=nivel_id&order=nivel_id', this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getCategoria2 () {
        return this.http.get(this.url + '?select=categoria_id&groupby=categoria_id' , this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getHabilidade2 () {
        return this.http.get(this.url + '?select=habilidade_id&groupby=habilidade_id', this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getNivel3 (data: any) {
        return this.http.get(this.url + '?where[nivel_id]=' + data.nivel_id , this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getCategoria3 (data: any) {
        return this.http.get(this.url + '?where[categoria_id]=' + data.categoria_id , this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getHabilidade3 (data: any) {
        return this.http.get(this.url + '?where[habilidade_id]=' + data.habilidade_id , this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getQuestaoIni (data: any) {
        return this.http.get(this.url + '?where[id]=' + data , this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
    getUser(){
        return this.http.get(this.url, this.options)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }
}
