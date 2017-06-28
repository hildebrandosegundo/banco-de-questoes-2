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
const questoes_component_1 = require("./questoes.component");
const questoes_view_component_1 = require("./questoes-view.component");
const questoes_new_component_1 = require("./questoes-new.component");
const questoes_edit_component_1 = require("./questoes-edit.component");
const appRoutes = [
    { path: 'questoes', component: questoes_component_1.QuestoesComponent },
    { path: 'questoes/new', component: questoes_new_component_1.QuestoesNewComponent },
    { path: 'questoes/:id', component: questoes_view_component_1.QuestoesViewComponent },
    { path: 'questoes/:id/edit', component: questoes_edit_component_1.QuestoesEditComponent },
];
let QuestoesModule = class QuestoesModule {
};
QuestoesModule = __decorate([
    core_1.NgModule({
        imports: [
            app_shared_components_module_1.AppSharedComponentsModule,
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes),
            forms_1.FormsModule
        ],
        declarations: [
            questoes_component_1.QuestoesComponent,
            questoes_new_component_1.QuestoesNewComponent,
            questoes_view_component_1.QuestoesViewComponent,
            questoes_edit_component_1.QuestoesEditComponent
        ],
        // bootstrap: [],
        providers: [
            app_http_service_1.AppHttpService
        ],
    })
], QuestoesModule);
exports.QuestoesModule = QuestoesModule;
//# sourceMappingURL=questoes.module.js.map