"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var Login_component_1 = require("./Login/Login.component");
var forms_1 = require("@angular/forms");
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//import { MatButtonModule, MatCheckboxModule } from '@angular/material';
var button_1 = require("@angular/material/button");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                button_1.MatButtonModule,
                //BrowserAnimationsModule,
                //NoopAnimationsModule,
                //MatButtonModule,
                // MatCheckboxModule,
                router_1.RouterModule.forRoot([
                    { path: "", component: Login_component_1.LoginComponent },
                ])
            ],
            declarations: [app_component_1.AppComponent, Login_component_1.LoginComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map