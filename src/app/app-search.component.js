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
/**
 * Created by hildebrandosegundo on 08/06/17.
 */
const core_1 = require("@angular/core");
const app_http_service_1 = require("./app-http.service");
const Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
let AppSearchComponent = class AppSearchComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.onSearch = new core_1.EventEmitter();
        this.searchTerm = new Subject_1.Subject();
    }
    ngOnInit() {
        this.searchTerm
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe((term) => {
            if (term) {
                this.httpService.builder(this.resource)
                    .search(term)
                    .then((res) => {
                    this.onSearch.emit(res);
                });
            }
            this.httpService.builder(this.resource)
                .list()
                .then((res) => {
                this.onSearch.emit(res);
            });
        });
    }
    search(term) {
        this.searchTerm.next(term);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AppSearchComponent.prototype, "resource", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppSearchComponent.prototype, "onSearch", void 0);
AppSearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        template: `
        <div class="row">
            <div class="input-field col s6">
                <input name="search" type="text" #searchInput id="search-input" class="validate" placeholder="Pesquise aqui..." (keyup)="search(searchInput.value)">
                <label for="search" class="active">Busca</label>
            </div>
        </div>
    `
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService])
], AppSearchComponent);
exports.AppSearchComponent = AppSearchComponent;
//# sourceMappingURL=app-search.component.js.map