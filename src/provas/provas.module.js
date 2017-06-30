"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by hildebrandosegundo on 06/06/17.
 */
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const app_shared_components_module_1 = require("../app/app-shared-components.module");
const app_http_service_1 = require("../app/app-http.service");
const forms_1 = require("@angular/forms");
const provas_component_1 = require("./provas.component");
const provas_view_component_1 = require("./provas-view.component");
const provas_new_component_1 = require("./provas-new.component");
const provas_edit_component_1 = require("./provas-edit.component");
const ng2_materialize_1 = require("ng2-materialize");
const AppendQuestao_component_1 = require("../app/AppendQuestao.component");
const provagerada_component_1 = require("./provagerada.component");
const appRoutes = [
    { path: 'provas', component: provas_component_1.provasComponent },
    { path: 'provas/new', component: provas_new_component_1.provasNewComponent },
    { path: 'provas/:id', component: provas_view_component_1.provasViewComponent },
    { path: 'provas/:id/edit', component: provas_edit_component_1.provasEditComponent },
    { path: 'provagerada/:id', component: provagerada_component_1.provaGeradaComponent },
];
let ProvasModule = class ProvasModule {
};
ProvasModule = __decorate([
    core_1.NgModule({
        imports: [
            app_shared_components_module_1.AppSharedComponentsModule,
            platform_browser_1.BrowserModule,
            ng2_materialize_1.MaterializeModule.forRoot(),
            router_1.RouterModule.forRoot(appRoutes),
            forms_1.FormsModule
        ],
        declarations: [
            provas_component_1.provasComponent,
            provas_new_component_1.provasNewComponent,
            provas_view_component_1.provasViewComponent,
            provas_edit_component_1.provasEditComponent,
            provagerada_component_1.provaGeradaComponent
        ],
        providers: [
            app_http_service_1.AppHttpService, AppendQuestao_component_1.AppendQuestaoComponent
        ]
    })
], ProvasModule);
exports.ProvasModule = ProvasModule;
//# sourceMappingURL=provas.module.js.map