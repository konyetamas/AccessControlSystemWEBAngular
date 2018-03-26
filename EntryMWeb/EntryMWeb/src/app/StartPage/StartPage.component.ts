import { Component, ViewChild, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';


import { MembersComponent } from '../Members/Members.component';
import { MessagesComponent } from '../Messages/Messages.component';
import { EntriesComponent } from '../Entries/Entries.component';


@Component({
    selector: 'app-startpage',
    templateUrl: './StartPage.html',
    styleUrls: ['./StartPageStyle.css']
})
export class StartPageComponent implements OnInit {

    constructor(private http: Http, private router: Router) { }

    Navigate() {
        this.router.navigate(['login']);
    }

    ngOnInit() {

        this.Navigate();
    }

}

