import { Component, ViewChild, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-members',
    templateUrl: './Members.html',
    styleUrls: ['./MembersStyle.css']
})
export class MembersComponent implements OnInit {

    constructor(private router: Router, private http: Http, private route: ActivatedRoute) { }
    user: object = { Name: "", Password: "" };
    Items: Array<Member>;
    companyId: number;
    private sub: any;



    displayedColumns = ['Id', 'FirstName', 'LastName', 'Title'];
    dataSource = new MatTableDataSource(this.Items);
    @ViewChild(MatSort) sort: MatSort;


    GetMembers() {

        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('CompanyId', '1');

        let params = new HttpParams().set("CompanyId", '1');
        const url = "../../../api/member/GetMembersByCompany?CompanyId=" + this.companyId;

        let options = new RequestOptions({ method: RequestMethod.Get, headers: myHeaders, params: params });
        this.http.get(url).subscribe(
            (res: Response) => {
                this.Items = res.json();
                alert(this.Items);
                console.log(this.Items);
            })
           
    }


   

    ngOnInit() {  
        this.sub = this.route.params.subscribe(params => {
            this.companyId = +params['id'];
        });   
        this.GetMembers();   
    }

}

export class Member {
    Id: string;
    FirstName: string;
    LastName: string;
    Title: string;
}
