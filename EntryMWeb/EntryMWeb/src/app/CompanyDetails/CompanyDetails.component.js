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
var http_2 = require("@angular/common/http");
var CompanyDetailsComponent = /** @class */ (function () {
    function CompanyDetailsComponent(router, http, route) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.company = { Id: "", Name: "", Address: "", Phone: "" };
    }
    CompanyDetailsComponent.prototype.GetDetails = function () {
        var _this = this;
        var url = "../../../api/company/GetCompanyById?CompanyId=" + this.companyId;
        this.http.get(url).subscribe(function (res) {
            _this.company = res.json();
            console.log(_this.company);
        });
    };
    CompanyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.companyId = +params['id'];
        });
        this.GetDetails();
    };
    CompanyDetailsComponent.prototype.Save = function () {
        var httpOptions = {
            headers: new http_2.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        var url = "../../../api/company/EditCompany";
        this.http.post(url, this.company)
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
    CompanyDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-companydetails',
            templateUrl: './CompanyDetails.html',
            styleUrls: ['./CompanyDetailsStyle.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.Http, router_1.ActivatedRoute])
    ], CompanyDetailsComponent);
    return CompanyDetailsComponent;
}());
exports.CompanyDetailsComponent = CompanyDetailsComponent;
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=CompanyDetails.component.js.map