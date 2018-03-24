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
var animations_1 = require("@angular/platform-browser/animations");
var animations_2 = require("@angular/platform-browser/animations");
//import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
//import { MatButtonModule } from '@angular/material';
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
//import { MatListModule } from '@angular/material/list';
//import "~@angular/material/prebuilt-themes/indigo-pink.css";
var material_1 = require("@angular/material");
var AppModule = /** @class */ (function () {
    //@NgModule({
    //    imports: [
    //        BrowserModule,
    //        FormsModule,
    //        HttpModule,
    //        //MatListModule,
    //        //BrowserAnimationsModule,
    //        //NoopAnimationsModule,
    //        //MdButtonModule,
    //        //BrowserAnimationsModule,
    //        //NoopAnimationsModule,
    //        MatButtonModule,
    //      // MatCheckboxModule,
    //        RouterModule.forRoot([
    //            { path: "", component: LoginComponent },
    //        ])
    //    ],
    //    declarations: [AppComponent, LoginComponent],
    //  bootstrap:    [ AppComponent ]
    //})
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                animations_1.BrowserAnimationsModule,
                animations_2.NoopAnimationsModule,
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatToolbarModule,
                material_1.MatIconModule,
                material_1.MatCardModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                router_1.RouterModule.forRoot([
                    { path: "", component: Login_component_1.LoginComponent },
                ])
            ],
            exports: [
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatToolbarModule,
                material_1.MatIconModule,
                material_1.MatCardModule,
                material_1.MatInputModule,
                material_1.MatFormFieldModule,
            ],
            declarations: [app_component_1.AppComponent, Login_component_1.LoginComponent],
            bootstrap: [app_component_1.AppComponent]
        })
        //@NgModule({
        //    imports: [
        //        BrowserModule,
        //        FormsModule,
        //        HttpModule,
        //        //MatListModule,
        //        //BrowserAnimationsModule,
        //        //NoopAnimationsModule,
        //        //MdButtonModule,
        //        //BrowserAnimationsModule,
        //        //NoopAnimationsModule,
        //        MatButtonModule,
        //      // MatCheckboxModule,
        //        RouterModule.forRoot([
        //            { path: "", component: LoginComponent },
        //        ])
        //    ],
        //    declarations: [AppComponent, LoginComponent],
        //  bootstrap:    [ AppComponent ]
        //})
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map