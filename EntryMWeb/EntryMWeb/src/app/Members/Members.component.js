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
var http_2 = require("@angular/common/http");
var AddNewMember_component_1 = require("../AddNewMember/AddNewMember.component");
var EditMember_component_1 = require("../EditMember/EditMember.component");
var MembersComponent = /** @class */ (function () {
    function MembersComponent(router, http, route, dialog) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.dialog = dialog;
        this.user = { Name: "", Password: "" };
        this.displayedColumns = ['Id', 'FirstName', 'LastName', 'Title'];
        this.dataSource = new material_1.MatTableDataSource(this.Items);
    }
    MembersComponent.prototype.GetMembers = function () {
        var _this = this;
        var myHeaders = new http_1.Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('CompanyId', '1');
        var params = new http_2.HttpParams().set("CompanyId", '1');
        var url = "../../../api/member/GetMembersByCompany?CompanyId=" + this.companyId;
        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Get, headers: myHeaders, params: params });
        this.http.get(url).subscribe(function (res) {
            _this.Items = res.json();
            alert(_this.Items);
            console.log(_this.Items);
        });
    };
    MembersComponent.prototype.openDialog = function () {
        this.dialog.open(AddNewMember_component_1.AddNewMemberComponent, {
            height: '450px',
            width: '350px',
            closeOnNavigation: true,
            data: {
                id: this.companyId
            },
        });
    };
    MembersComponent.prototype.openEditDialog = function (actualId) {
        this.dialog.open(EditMember_component_1.EditMemberComponent, {
            height: '450px',
            width: '350px',
            closeOnNavigation: true,
            data: {
                id: actualId,
                companyId: this.companyId
            }
        });
    };
    MembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.companyId = +params['id'];
        });
        this.GetMembers();
    };
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], MembersComponent.prototype, "sort", void 0);
    MembersComponent = __decorate([
        core_1.Component({
            selector: 'app-members',
            templateUrl: './Members.html',
            styleUrls: ['./MembersStyle.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.Http, router_1.ActivatedRoute, material_2.MatDialog])
    ], MembersComponent);
    return MembersComponent;
}());
exports.MembersComponent = MembersComponent;
var Member = /** @class */ (function () {
    function Member() {
    }
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=Members.component.js.map