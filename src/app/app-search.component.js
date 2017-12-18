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
var core_1 = require("@angular/core");
var app_http_service_1 = require("./app-http.service");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var AppSearchComponent = (function () {
    function AppSearchComponent(httpService) {
        this.httpService = httpService;
        this.onSearch = new core_1.EventEmitter();
        this.searchTerm = new Subject_1.Subject();
    }
    AppSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerm
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (term) {
            if (term) {
                _this.httpService.builder(_this.resource)
                    .search(term)
                    .then(function (res) {
                    _this.onSearch.emit(res);
                });
            }
            else {
                _this.httpService.builder(_this.resource)
                    .list({ order: 'desc' })
                    .then(function (res) {
                    _this.onSearch.emit(res);
                });
            }
        });
    };
    AppSearchComponent.prototype.search = function (term) {
        this.searchTerm.next(term);
    };
    return AppSearchComponent;
}());
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
        template: "\n        <div class=\"row\">\n            <div class=\"input-field col s6\">\n                <input name=\"search\" type=\"text\" #searchInput id=\"search-input\" class=\"validate\" placeholder=\"Pesquise pelo c\u00F3digo...\" (keyup)=\"search(searchInput.value)\">\n                <label for=\"search\" class=\"active\">Busca</label>\n            </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService])
], AppSearchComponent);
exports.AppSearchComponent = AppSearchComponent;
//# sourceMappingURL=app-search.component.js.map