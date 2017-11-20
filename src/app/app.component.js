"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
require("../../public/css/styles.css");
require("materialize-css/dist/css/materialize.min.css");
require("mdi/css/materialdesignicons.css");
require("materialize-css/dist/js/materialize.min.js");
require("ionicons/dist/css/ionicons.css");
require("jquery/dist/jquery-2.1.1.min.js");
require("../../src/jquery.wordexport.js");
require("../../src/jquery.sortable.min.js");
//import 'font-awesome/css/font-awesome.min.css';
/*import 'froala-editor/css/froala_editor.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/languages/pt_br.js';*/
/*
import "tinymce/tinymce.min.js";
import "tinymce/themes/modern/theme.min.js";
import "tinymce/plugins/link/plugin.min.js";
import "tinymce/plugins/paste/plugin.min.js";
import "tinymce/plugins/table/plugin.min.js";
import "tinymce/plugins/advlist/plugin.min.js";
import "tinymce/plugins/autoresize/plugin.min.js";
import "tinymce/plugins/lists/plugin.min.js";
import "tinymce/plugins/code/plugin.min.js";
*/
require("../assets/css/quill.snow.css");
require("../assets/css/quill.bubble.css");
/*
import "quill/dist/quill.min.js";
import "quill-image-resize-module/image-resize.min.js";
*/
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.ano = new Date().getFullYear();
    }
    /*ngOnInit(){
        if (localStorage['user'])
        this.user = JSON.parse(localStorage['user']);
    }*/
    AppComponent.prototype.ngAfterContentChecked = function () {
        if (localStorage['user'])
            this.user = JSON.parse(localStorage['user']);
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('tokens');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.istoken = function () {
        return localStorage.getItem('tokens');
    };
    AppComponent.prototype.getAno = function () {
        return this.ano;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map