import { Component, ViewChild, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule, MatDialog } from '@angular/material';
import { HttpParams, HttpClient } from '@angular/common/http';
import { AddNewMessageComponent } from '../AddNewMessage/AddNewMessage.component';
import { ReadMessageComponent } from '../ReadMessage/ReadMessage.component';

@Component({
    selector: 'app-outboxmessages',
    templateUrl: './OutBoxMessages.html',
    styleUrls: ['./OutBoxMessagesStyle.css']
})
export class OutBoxMessagesComponent implements OnInit {

    constructor(private router: Router, private http: Http, private route: ActivatedRoute, public dialog: MatDialog) { }
    user: object = { Name: "", Password: "" };
    Items: Array<MessageFromCompany>;
    companyId: number;
    private sub: any;

    displayedColumns = ['Id', 'Subject', 'Text'];
    dataSource = new MatTableDataSource(this.Items);
    @ViewChild(MatSort) sort: MatSort;


    GetMessages() {
        const url = "../../../api/outboxmessage/GetCompanyMessages?Id=" + this.companyId;

        this.http.get(url).subscribe(
            (res: Response) => {
                this.Items = res.json();
                console.log(this.Items);
            })
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.companyId = +params['id'];
        });

        this.GetMessages();
    }

    openDialog() {
        this.dialog.open(AddNewMessageComponent, {
            height: '400px',
            width: '350px',
            closeOnNavigation: true,
            data: {
                companyId: this.companyId
            }
        });
    }

    OpenMessage(actualId: number) {
        this.dialog.open(ReadMessageComponent, {
            height: '350px',
            width: '350px',
            closeOnNavigation: true,
            data: {
                id: actualId,
                companyId: this.companyId
            }
        });
    }

}



export class MessageFromCompany {
    Id: string;
    Subject: string;
    Text: string;
    CompanyId: number;
    CompanyName: string;
}


