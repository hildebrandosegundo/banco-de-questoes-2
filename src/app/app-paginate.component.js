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
const core_1 = require("@angular/core");
const app_http_service_1 = require("./app-http.service");
let AppPaginateComponent = class AppPaginateComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.onChangePage = new core_1.EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.totalPage) {
            this.pages = Array(this.totalPage)
                .fill(this.totalPage)
                .map((x, i) => {
                return i + 1;
            });
        }
    }
    changePage(page) {
        this.activePage = page;
        this.httpService.builder(this.resource).list({ page: page })
            .then((res) => {
            this.onChangePage.emit(res);
        });
    }
};
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
        template: `
      <div class="center-align">
          <ul class="pagination">
              <li class="waves-effect" [ngClass]="{'active': page == activePage}" *ngFor="let page of pages">
                  <a (click)="changePage(page)">{{page}}</a>
              </li>
          </ul>
          <p>Você tem um total de {{total}} registros, exibindo página {{activePage}} de {{totalPage}}</p>
      </div>
  `
    }),
    __metadata("design:paramtypes", [app_http_service_1.AppHttpService])
], AppPaginateComponent);
exports.AppPaginateComponent = AppPaginateComponent;
//# sourceMappingURL=app-paginate.component.js.map