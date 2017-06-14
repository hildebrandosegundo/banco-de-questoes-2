/**
 * Created by hildebrandosegundo on 06/06/17.
 */
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
var app_http_service_1 = require("./app-http.service");
var AppPaginateComponent = (function () {
    function AppPaginateComponent(httpService) {
        this.httpService = httpService;
        this.onChangePage = new core_1.EventEmitter();
    }
    AppPaginateComponent.prototype.ngOnChanges = function (changes) {
        if (changes.totalPage) {
            this.pages = Array(this.totalPage)
                .fill(this.totalPage)
                .map(function (x, i) {
                return i + 1;
            });
        }
    };
    AppPaginateComponent.prototype.changePage = function (page) {
        var _this = this;
        this.activePage = page;
        this.httpService.builder(this.resource).list({ page: page })
            .then(function (res) {
            _this.onChangePage.emit(res);
        });
    };
    return AppPaginateComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AppPaginateComponent.prototype, "total", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AppPaginateComponent.prototype, "activePage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AppPaginateComponent.prototype, "totalPage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AppPaginateComponent.prototype, "pages", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AppPaginateComponent.prototype, "resource", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppPaginateComponent.prototype, "onChangePage", void 0);
AppPaginateComponent = __decorate([
    core_1.Component({
        selector: 'paginate',
        template: "\n      <div class=\"center-align\">\n          <ul class=\"pagination\">\n              <li class=\"waves-effect\" [ngClass]=\"{'active': page == activePage}\" *ngFor=\"let page of pages\">\n                  <a (click)=\"changePage(page)\">{{page}}</a>\n              </li>\n          </ul>\n          <p>Voc\u00EA tem um total de {{total}} registros, exibindo p\u00E1gina {{activePage}} de {{totalPage}}</p>\n      </div>\n  "
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService])
], AppPaginateComponent);
exports.AppPaginateComponent = AppPaginateComponent;
//# sourceMappingURL=app-paginate.component.js.map