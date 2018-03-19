import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
import { FormsModule } from '@angular/forms';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MatButtonModule,
        //BrowserAnimationsModule,
        //NoopAnimationsModule,
        //MatButtonModule,
       // MatCheckboxModule,
        RouterModule.forRoot([
            { path: "", component: LoginComponent },
            
        ])
    ],
    declarations: [AppComponent, LoginComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
