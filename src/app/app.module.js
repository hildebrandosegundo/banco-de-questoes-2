"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var home_module_1 = require("../home.module");
var questoes_module_1 = require("../questoes/questoes.module");
var provas_module_1 = require("../provas/provas.module");
var login_module_1 = require("../login/login.module");
var authentication_http_service_1 = require("../login/authentication-http.service");
var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            home_module_1.HomeModule,
            questoes_module_1.QuestoesModule,
            login_module_1.LoginModule,
            provas_module_1.ProvasModule,
            router_1.RouterModule.forRoot(appRoutes),
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            { provide: http_1.Http, useClass: authentication_http_service_1.AuthenticationHttpService }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map