import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule, MAT_DIALOG_DATA } from '@angular/material';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-addnewmessage',
    templateUrl: './AddNewMessage.html',
    styleUrls: ['./AddNewMessageStyle.css']
})
export class AddNewMessageComponent {

    constructor(private router: Router, private http: Http, private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any) { }
    companyId: number;
    private sub: any;
    message: Message = {
        Id: 0,
        Subject: "",
        Text: "",
        Date: new Date(),
        CompanyId:0
    };

    Send() {
        this.message.CompanyId = this.data.companyId;
        const url = "../../../api/outboxmessage/AddNewMessage";
        this.http.post(url, this.message)
            .toPromise()
            .then((response: Response) => {
                if (response != null) {
                    alert("save successful");
                }
                else {
                    alert("Wrong username or password")
                }

            })
            .catch(() => { alert("Wrong username or password") })
    }

}

export class Message {
    Id: number;
    Subject: string;
    Text: string;
    Date: Date;
    CompanyId: number;
}


