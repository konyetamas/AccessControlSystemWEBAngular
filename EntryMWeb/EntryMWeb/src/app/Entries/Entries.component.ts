import { Component, ViewChild, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-entries',
    templateUrl: './Entries.html',
    styleUrls: ['./EntriesStyle.css']
})
export class EntriesComponent implements OnInit {

    constructor(private router: Router, private http: Http, private route: ActivatedRoute) { }
    user: object = { Name: "", Password: "" };
    Items: Array<Entry>;
    companyId: number;
    private sub: any;

    displayedColumns = ['Id', 'MemberName','EntryDate'];
    dataSource = new MatTableDataSource(this.Items);
    @ViewChild(MatSort) sort: MatSort;


    GetEntries() {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('CompanyId', '1');
        const url = "../../../api/entry/GetEntries?CompanyId="+ this.companyId;
        this.http.get(url).subscribe(
            (res: Response) => {
                this.Items = res.json();
            })
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.companyId = +params['id'];
        });   
        this.GetEntries();
    }

}

export class Entry {
    Id: string;
    MemberName: string;
    EntryDate: Date;
}
