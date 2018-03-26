import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { HomeComponent } from './Home/Home.component';
import { MembersComponent } from './Members/Members.component';
import { MessagesComponent } from './Messages/Messages.component';
import { EntriesComponent } from './Entries/Entries.component';
import { StartPageComponent } from './StartPage/StartPage.component';

//import { HomeComponent } from './home/home.component';
//import { ProductComponent } from './product/product.component';
//import { UpdateProductComponent } from './update-product/update-product.component';

@Component({
  selector: 'my-app',
    template: ` <app-startpage></app-startpage>`,
})


export class AppComponent  { name = 'Angular'; }

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
