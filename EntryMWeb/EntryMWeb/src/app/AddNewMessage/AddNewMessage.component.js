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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var AddNewMessageComponent = /** @class */ (function () {
    function AddNewMessageComponent(router, http, route, data) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.data = data;
        this.message = {
            Id: 0,
            Subject: "",
            Text: "",
            Date: new Date(),
            CompanyId: 0
        };
    }
    AddNewMessageComponent.prototype.Send = function () {
        this.message.CompanyId = this.data.companyId;
        var url = "../../../api/outboxmessage/AddNewMessage";
        this.http.post(url, this.message)
            .toPromise()
            .then(function (response) {
            if (response != null) {
                alert("save successful");
            }
            else {
                alert("Wrong username or password");
            }
        })
            .catch(function () { alert("Wrong username or password"); });
    };
    AddNewMessageComponent = __decorate([
        core_1.Component({
            selector: 'app-addnewmessage',
            templateUrl: './AddNewMessage.html',
            styleUrls: ['./AddNewMessageStyle.css']
        }),
        __param(3, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [router_1.Router, http_1.Http, router_1.ActivatedRoute, Object])
    ], AddNewMessageComponent);
    return AddNewMessageComponent;
}());
exports.AddNewMessageComponent = AddNewMessageComponent;
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=AddNewMessage.component.js.map