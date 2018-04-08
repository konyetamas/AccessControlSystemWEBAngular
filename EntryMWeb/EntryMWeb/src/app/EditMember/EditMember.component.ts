import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule, MAT_DIALOG_DATA } from '@angular/material';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-editmember',
    templateUrl: './EditMember.html',
    styleUrls: ['./EditMemberStyle.css']
})
export class EditMemberComponent implements OnInit {

    constructor(private router: Router, private http: Http, private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any) { }
    //Company: Company;
    memberId: number;
    private sub: any;
    member: Member = {
        Id: 0,
        CompanyId: 0,
        FirstName: "",
        LastName: "",
        CardNumber: "",
        Title: "",
        CompanyName: ""
    };



    Save() {
        this.member.CompanyId = this.data.companyId;
        this.member.Id = this.data.id;

        const url = "../../../api/member/EditMember";
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

    GetMember() {
        const url = "../../../api/member/GetMemberById?MemberId=" + this.memberId;
        this.member.Id = this.memberId;
        this.http.get(url).subscribe(
            (res: Response) => {
                this.member = res.json();
            })
    }


    ngOnInit() {
        this.memberId = this.data.id;      
        this.GetMember();
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


