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
        this.url = 'http://localhost:8000/' + url;
        return this;
    }

    builder (resource: string) {
        this.url = 'http://localhost:8000/api/' + resource;
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
}
