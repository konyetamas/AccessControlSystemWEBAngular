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
var AddNewMessage_component_1 = require("../AddNewMessage/AddNewMessage.component");
var ReadMessage_component_1 = require("../ReadMessage/ReadMessage.component");
var OutBoxMessagesComponent = /** @class */ (function () {
    function OutBoxMessagesComponent(router, http, route, dialog) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.dialog = dialog;
        this.user = { Name: "", Password: "" };
        this.displayedColumns = ['Id', 'Subject', 'Text'];
        this.dataSource = new material_1.MatTableDataSource(this.Items);
    }
    OutBoxMessagesComponent.prototype.GetMessages = function () {
        var _this = this;
        var url = "../../../api/outboxmessage/GetCompanyMessages?Id=" + this.companyId;
        this.http.get(url).subscribe(function (res) {
            _this.Items = res.json();
            console.log(_this.Items);
        });
    };
    OutBoxMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.companyId = +params['id'];
        });
        this.GetMessages();
    };
    OutBoxMessagesComponent.prototype.openDialog = function () {
        this.dialog.open(AddNewMessage_component_1.AddNewMessageComponent, {
            height: '400px',
            width: '350px',
            closeOnNavigation: true,
            data: {
                companyId: this.companyId
            }
        });
    };
    OutBoxMessagesComponent.prototype.OpenMessage = function (actualId) {
        this.dialog.open(ReadMessage_component_1.ReadMessageComponent, {
            height: '350px',
            width: '350px',
            closeOnNavigation: true,
            data: {
                id: actualId,
                companyId: this.companyId
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], OutBoxMessagesComponent.prototype, "sort", void 0);
    OutBoxMessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-outboxmessages',
            templateUrl: './OutBoxMessages.html',
            styleUrls: ['./OutBoxMessagesStyle.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.Http, router_1.ActivatedRoute, material_2.MatDialog])
    ], OutBoxMessagesComponent);
    return OutBoxMessagesComponent;
}());
exports.OutBoxMessagesComponent = OutBoxMessagesComponent;
var MessageFromCompany = /** @class */ (function () {
    function MessageFromCompany() {
    }
    return MessageFromCompany;
}());
exports.MessageFromCompany = MessageFromCompany;
//# sourceMappingURL=OutBoxMessages.component.js.map