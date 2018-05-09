import { Component, ViewChild, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Routes, ActivatedRoute } from '@angular/router';


import { MembersComponent } from '../Members/Members.component';
import { MessagesComponent } from '../Messages/Messages.component';
import { EntriesComponent } from '../Entries/Entries.component';
import { OutBoxMessagesComponent } from '../OutBoxMessages/OutBoxMessages.component';


@Component({
    selector: 'app-nav',
    templateUrl: './Nav2.html',
    styleUrls: ['./NavStyle2.css']
})
export class NavComponent implements OnInit {

    constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }
    id: number;
    private sub: any;

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }

    NavigateToMembers() {
        this.router.navigate(['/members', this.id]);
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


