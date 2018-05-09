import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule, MAT_DIALOG_DATA } from '@angular/material';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-readmessage',
    templateUrl: './ReadMessage.html',
    styleUrls: ['./ReadMessageStyle.css']
})


export class ReadMessageComponent implements OnInit {

    constructor(private router: Router, private http: Http, private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any) { }
    //Company: Company;
    memberId: number;
    private sub: any;
    message: Message = {
        Id: 0,
        Subject: "",
        Text: "",
        Date: new Date(),
        CompanyId: 0
    };

    GetMessage() {
        this.message.Id = this.data.id;
        this.message.CompanyId = this.data.companyId;

        if (this.data.companyId > 0) {
            const url = "../../../api/outboxmessage/GetMessage?MessageId=" + this.message.Id + "&CompanyId=" + this.message.CompanyId;
                this.http.get(url).subscribe(
                    (res: Response) => {
                        this.message = res.json();
                    });
        }
        else {
            const url = "../../../api/message/GetMessageFromBuilding?MessageId=" + this.message.Id;
            this.http.get(url).subscribe(
                (res: Response) => {
                    this.message = res.json();
                });
        }
    }   
    
    ngOnInit() {
        this.GetMessage();
    }

}

export class Message {
    Id: number;
    Subject: string;
    Text: string;
    Date: Date;
    CompanyId: number;
}

