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
var Members_component_1 = require("../Members/Members.component");
var Messages_component_1 = require("../Messages/Messages.component");
var Entries_component_1 = require("../Entries/Entries.component");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, http) {
        this.router = router;
        this.http = http;
        this.user = { Name: "", Password: "" };
        this.displayedColumns = ['Id', 'MemberName', 'EntryDate'];
        this.dataSource = new material_1.MatTableDataSource(this.Items);
    }
    HomeComponent.prototype.GetEntries = function () {
        var _this = this;
        var myHeaders = new http_1.Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('CompanyId', '1');
        var url = "../../../api/member/GetEntriesByCompanyId?CompanyId=4";
        this.http.get(url).subscribe(function (res) {
            _this.Items = res.json();
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.GetEntries();
    };
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], HomeComponent.prototype, "sort", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './Home.html',
            styleUrls: ['./HomeStyle.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.Http])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
var Entry = /** @class */ (function () {
    function Entry() {
    }
    return Entry;
}());
exports.Entry = Entry;
exports.routerConfig = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'messages',
        component: Messages_component_1.MessagesComponent
    },
    {
        path: 'members',
        component: Members_component_1.MembersComponent
    },
    {
        path: 'entries',
        component: Entries_component_1.EntriesComponent
    },
    {
        path: 'detail',
        component: Members_component_1.MembersComponent
    },
];
//# sourceMappingURL=Home.component.js.map