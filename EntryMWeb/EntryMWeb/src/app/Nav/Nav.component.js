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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var NavComponent = /** @class */ (function () {
    function NavComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            alert(_this.id);
        });
    };
    NavComponent.prototype.NavigateToMembers = function () {
        this.router.navigate(['/members', this.id]);
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            templateUrl: './Nav.html',
            styleUrls: ['./NavStyle.css']
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router, router_2.ActivatedRoute])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
var Entry = /** @class */ (function () {
    function Entry() {
    }
    return Entry;
}());
exports.Entry = Entry;
//export const routerConfig: Routes = [
//    {
//        path: 'home',
//        component: HomeComponent
//    },
//    {
//        path: 'home/messages',
//        component: MessagesComponent
//    },
//    {
//        path: 'home/members',
//        component: MembersComponent,
//    },
//    {
//        path: '',
//        redirectTo: '/home',
//        pathMatch: 'full'
//    },
//    {
//        path: '**',
//        redirectTo: '/home',
//        pathMatch: 'full'
//    }
//];
//# sourceMappingURL=Nav.component.js.map