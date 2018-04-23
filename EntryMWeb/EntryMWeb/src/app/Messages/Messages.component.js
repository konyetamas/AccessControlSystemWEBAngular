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
var material_2 = require("@angular/material");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(router, http, route, dialog) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.dialog = dialog;
        this.user = { Name: "", Password: "" };
        this.displayedColumns = ['Id', 'Subject', 'Text'];
        this.dataSource = new material_1.MatTableDataSource(this.Items);
    }
    MessagesComponent.prototype.GetMessages = function () {
        var _this = this;
        var url = "../../../api/message/GetMessagesFromBuildingToCompany?CompId=" + this.companyId;
        this.http.get(url).subscribe(function (res) {
            _this.Items = res.json();
            //alert(this.Items);
            console.log(_this.Items);
        });
    };
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.companyId = +params['id'];
        });
        this.GetMessages();
    };
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], MessagesComponent.prototype, "sort", void 0);
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            templateUrl: './Messages.html',
            styleUrls: ['./MessagesStyle.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.Http, router_1.ActivatedRoute, material_2.MatDialog])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=Messages.component.js.map