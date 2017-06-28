import { Component } from '@angular/core';
import '../../public/css/styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'mdi/css/materialdesignicons.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'ionicons/dist/css/ionicons.css';
import '../../src/jquery-2.1.1.min.js';

import {Router} from "@angular/router";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    public ano = new Date().getFullYear();
    constructor (
        private router: Router,
    ) {}
  logout () {
    localStorage.removeItem('tokens');
      this.router.navigate(['/login']);
  }
  istoken () {
    return localStorage.getItem('tokens')
  }
  getAno () {
      return this.ano
  }
}
