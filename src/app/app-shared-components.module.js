"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by hildebrandosegundo on 08/06/17.
 */
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const app_paginate_component_1 = require("./app-paginate.component");
const app_search_component_1 = require("./app-search.component");
const AppendQuestao_component_1 = require("./AppendQuestao.component");
let AppSharedComponentsModule = class AppSharedComponentsModule {
};
AppSharedComponentsModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            AppendQuestao_component_1.AppendQuestaoComponent,
            app_paginate_component_1.AppPaginateComponent,
            app_search_component_1.AppSearchComponent,
        ],
        exports: [
            AppendQuestao_component_1.AppendQuestaoComponent,
            app_paginate_component_1.AppPaginateComponent,
            app_search_component_1.AppSearchComponent
        ]
    })
], AppSharedComponentsModule);
exports.AppSharedComponentsModule = AppSharedComponentsModule;
//# sourceMappingURL=app-shared-components.module.js.map