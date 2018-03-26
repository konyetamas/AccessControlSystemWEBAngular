import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
import { MembersComponent } from './Members/Members.component';
import { MessagesComponent } from './Messages/Messages.component';
import { EntriesComponent } from './Entries/Entries.component';
import { NavComponent } from './Nav/Nav.component';
import { HomeComponent } from './Home/Home.component';
import { StartPageComponent } from './StartPage/StartPage.component';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
//import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CdkTable } from '@angular/cdk/table'
import { CdkTableModule } from '@angular/cdk/table';
//import { MatListModule } from '@angular/material/list';

import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatTableModule } from '@angular/material';

//import "~@angular/material/prebuilt-themes/indigo-pink.css";

import { HttpParams, HttpClient } from '@angular/common/http';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
} from '@angular/material';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        RouterModule.forRoot([
            { path: "login", component: LoginComponent },                               
              { path: "home", component: HomeComponent,
                children: [{
                    path: 'members',
                    component: MembersComponent
                },
                {
                    path: 'entries',
                    component: EntriesComponent
                },
                {
                    path: 'messages',
                    component: MessagesComponent
                }]
            }           


        ])
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    declarations: [AppComponent, StartPageComponent, HomeComponent, NavComponent, LoginComponent, MembersComponent, MessagesComponent, EntriesComponent],
    bootstrap: [AppComponent]
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
export class AppModule { }
