"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { HomeComponent } from './home/home.component';
//import { ProductComponent } from './product/product.component';
//import { UpdateProductComponent } from './update-product/update-product.component';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " <app-startpage></app-startpage>",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//export const routerConfig: Routes = [
//    {
//        path: 'home',
//        component: HomeComponent
//    },
//    {
//        path: 'home/messages',
//        component: MessagesComponent
//    },
//    {
//        path: 'home/members',
//        component: MembersComponent,
//    },
//    {
//        path: '',
//        redirectTo: '/home',
//        pathMatch: 'full'
//    },
//    {
//        path: '**',
//        redirectTo: '/home',
//        pathMatch: 'full'
//    }
//];
//# sourceMappingURL=app.component.js.map