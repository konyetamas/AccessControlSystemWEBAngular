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
var http_2 = require("@angular/common/http");
var MembersComponent = /** @class */ (function () {
    function MembersComponent(router, http) {
        this.router = router;
        this.http = http;
        this.user = { Name: "", Password: "" };
        this.displayedColumns = ['Id', 'FirstName', 'LastName', 'Title'];
        this.dataSource = new material_1.MatTableDataSource(this.Items);
    }
    MembersComponent.prototype.GetMembers = function () {
        var _this = this;
        var myHeaders = new http_1.Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('CompanyId', '1');
        //let myParams = new URLSearchParams();
        //myParams.set('CompanyId', '1'); 
        //headers.append('Password', password);
        var params = new http_2.HttpParams().set("CompanyId", '1');
        var url = "../../../api/member/GetMembersByCompany?CompanyId=4";
        var options = new http_1.RequestOptions({ method: http_1.RequestMethod.Get, headers: myHeaders, params: params });
        //this.http.get(url)
        //subscribe(
        //    (res: Response) => {
        //        this.products = res.json();
        //        )
        this.http.get(url).subscribe(function (res) {
            _this.Items = res.json();
            alert(_this.Items);
            console.log(_this.Items);
        });
        //.catch(() => { alert("Wrong username or password") })
    };
    MembersComponent.prototype.ngOnInit = function () {
        this.GetMembers();
        alert(this.Items);
        //this.dataSource = new MatTableDataSource(this.Items);
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
        __metadata("design:paramtypes", [router_1.Router, http_1.Http])
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
//const ELEMENT_DATA: Member[] = [
//    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
//    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
//    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
//    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
//    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
//    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
//    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
//    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
//    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
//    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
//    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
//];
//# sourceMappingURL=Members.component.js.map