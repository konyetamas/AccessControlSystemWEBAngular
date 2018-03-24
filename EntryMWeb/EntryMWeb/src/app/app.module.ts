import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
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

//import "~@angular/material/prebuilt-themes/indigo-pink.css";


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
        RouterModule.forRoot([
            { path: "", component: LoginComponent },

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
    declarations: [AppComponent, LoginComponent],
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
