import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule, MAT_DIALOG_DATA} from '@angular/material';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-addnewmember',
    templateUrl: './AddNewMember.html',
    styleUrls: ['./AddNewMemberStyle.css']
})
export class AddNewMemberComponent {

    constructor(private router: Router, private http: Http, private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any) { }
    companyId: string;
    private sub: any;
    member: Member = {
        Id:0,
        CompanyId:0,
        FirstName: "",
        LastName: "",
        CardNumber: "",
        Title: "",
        CompanyName: ""
    };

    Add() {
        this.member.CompanyId = this.data.id;

        const url = "../../../api/membertoadd/AddNewMember";
        this.http.post(url, this.member)
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

export class Member {
    Id: number;
    CompanyId: number;
    FirstName: string;
    LastName: string;
    CardNumber: string;
    Title: string;
    CompanyName: string;
}


