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
    selector: 'app-nav',
    templateUrl: './Nav.html',
    styleUrls: ['./NavStyle.css']
})
export class NavComponent implements OnInit {

    constructor(private router: Router, private http: Http) { }
    user: object = { Name: "", Password: "" };
    Items: Array<Entry>;

    displayedColumns = ['Id', 'MemberName', 'EntryDate'];
    dataSource = new MatTableDataSource(this.Items);
    @ViewChild(MatSort) sort: MatSort;


    GetEntries() {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('CompanyId', '1');
        const url = "../../../api/member/GetEntriesByCompanyId?CompanyId=4";
        this.http.get(url).subscribe(
            (res: Response) => {
                this.Items = res.json();
            })
    }

    ngOnInit() {

        this.GetEntries();
    }

}

export class Entry {
    Id: string;
    MemberName: string;
    EntryDate: Date;
}

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


