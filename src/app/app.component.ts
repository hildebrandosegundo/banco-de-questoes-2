import { Component } from '@angular/core';
import '../../public/css/styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'mdi/css/materialdesignicons.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'ionicons/dist/css/ionicons.css';
import 'jquery/dist/jquery-2.1.1.min.js';
import '../../src/jquery.wordexport.js';
import '../../src/jquery.sortable.min.js';
import {Router} from "@angular/router";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    public ano = new Date().getFullYear();
    public user: any;
    constructor (
        private router: Router,
    ) {}
    /*ngOnInit(){
        if (localStorage['user'])
        this.user = JSON.parse(localStorage['user']);
    }*/
    ngAfterContentChecked(){
        if (localStorage['user'])
            this.user = JSON.parse(localStorage['user']);
    }
  logout () {
    localStorage.removeItem('tokens');
    localStorage.removeItem('user');
      this.router.navigate(['/login']);
  }
  istoken () {
    return localStorage.getItem('tokens')
  }
  getAno () {
      return this.ano
  }

}
