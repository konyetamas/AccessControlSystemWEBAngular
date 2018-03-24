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
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http) {
        this.router = router;
        this.http = http;
        this.user = { Name: "", Password: "" };
    }
    LoginComponent.prototype.Login = function (name, password) {
        //let headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        //headers.append('UserName', name);
        //headers.append('Password', password);
        var _this = this;
        //  let params = new HttpParams().set("UserName", name).set("Password", password);
        var url = "../../../api/user/CheckUserAutenthication";
        this.http.get(url)
            .toPromise()
            .then(function () {
            _this.router.navigate(['/']);
        })
            .catch(function () { alert("Wrong username or password"); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './Login.html',
            styleUrls: ['./LoginStyle.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.Http])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=Login.component.js.map