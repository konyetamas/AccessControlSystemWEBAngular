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
import { CompanyDetailsComponent } from './CompanyDetails/CompanyDetails.component';
import { AddNewMemberComponent } from './AddNewMember/AddNewMember.component';
import { EditMemberComponent } from './EditMember/EditMember.component';
import { OutBoxMessagesComponent } from './OutBoxMessages/OutBoxMessages.component';
import { AddNewMessageComponent } from './AddNewMessage/AddNewMessage.component';


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

import { MatTableModule, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material';

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
        MatDialogModule,
        RouterModule.forRoot([
            { path: "login", component: LoginComponent },
            { path: "home/:id", component: HomeComponent },
            {
                path: "nav/:id", component: NavComponent,
                children: [{
                    path: 'members/:id',
                    component: MembersComponent
                },
                {
                    path: 'entries/:id',
                    component: EntriesComponent
                },
                {
                    path: 'details/:id',
                    component: CompanyDetailsComponent
                },
                {
                    path: 'messages/:id',
                    component: MessagesComponent
                },
                {
                    path: 'addnewmember/:id',
                    component: AddNewMemberComponent
                },
                {
                    path: 'editmember/:id',
                    component: EditMemberComponent
                },

                  {
                        path: 'outboxmessages/:id',
                      component: OutBoxMessagesComponent
                  },

                    {
                        path: 'addnewmessage',
                        component: AddNewMessageComponent
                    }

                ]
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
    declarations: [AppComponent, OutBoxMessagesComponent, AddNewMessageComponent, EditMemberComponent, CompanyDetailsComponent, AddNewMemberComponent, StartPageComponent, HomeComponent, NavComponent, LoginComponent, MembersComponent, MessagesComponent, EntriesComponent],
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
