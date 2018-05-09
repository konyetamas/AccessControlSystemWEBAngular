import { Component, ViewChild, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule, MatDialog } from '@angular/material';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ReadMessageComponent } from '../ReadMessage/ReadMessage.component';

@Component({
    selector: 'app-messages',
    templateUrl: './Messages.html',
    styleUrls: ['./MessagesStyle.css']
})
export class MessagesComponent implements OnInit {

    constructor(private router: Router, private http: Http, private route: ActivatedRoute, public dialog: MatDialog) { }
    user: object = { Name: "", Password: "" };
    Items: Array<Message>;
    companyId: number;
    private sub: any;

    displayedColumns = ['Id', 'Subject', 'Text'];
    dataSource = new MatTableDataSource(this.Items);
    @ViewChild(MatSort) sort: MatSort;


    GetMessages() {

        const url = "../../../api/message/GetMessagesFromBuildingToCompany?CompId=" + this.companyId;

       
        this.http.get(url).subscribe(
            (res: Response) => {
                this.Items = res.json();
                //alert(this.Items);
                console.log(this.Items);
            })

    }

   

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.companyId = +params['id'];
        });   

        this.GetMessages();
    }

    OpenInboxMessage(actualId: number) {
        this.dialog.open(ReadMessageComponent, {
            height: '350px',
            width: '350px',
            closeOnNavigation: true,
            data: {
                id: actualId
            }
        });
    }

}

export class Message {
    Id: number;
    Subject: string;
    Text: string;
}

 
