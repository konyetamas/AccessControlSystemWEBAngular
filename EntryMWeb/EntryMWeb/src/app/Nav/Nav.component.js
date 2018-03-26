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
var material_1 = require("@angular/material");
var NavComponent = /** @class */ (function () {
    function NavComponent(router, http) {
        this.router = router;
        this.http = http;
        this.user = { Name: "", Password: "" };
        this.displayedColumns = ['Id', 'MemberName', 'EntryDate'];
        this.dataSource = new material_1.MatTableDataSource(this.Items);
    }
    NavComponent.prototype.GetEntries = function () {
        var _this = this;
        var myHeaders = new http_1.Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('CompanyId', '1');
        var url = "../../../api/member/GetEntriesByCompanyId?CompanyId=4";
        this.http.get(url).subscribe(function (res) {
            _this.Items = res.json();
        });
    };
    NavComponent.prototype.ngOnInit = function () {
        this.GetEntries();
    };
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], NavComponent.prototype, "sort", void 0);
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            templateUrl: './Nav.html',
            styleUrls: ['./NavStyle.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.Http])
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