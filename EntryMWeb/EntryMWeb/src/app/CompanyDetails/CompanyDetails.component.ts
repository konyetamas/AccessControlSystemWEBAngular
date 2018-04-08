import { Component, ViewChild, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-companydetails',
    templateUrl: './CompanyDetails.html',
    styleUrls: ['./CompanyDetailsStyle.css']
})
export class CompanyDetailsComponent implements OnInit {

    constructor(private router: Router, private http: Http, private route: ActivatedRoute) { }
    //Company: Company;
    companyId: number;
    private sub: any;
    company: Company = { Id: "", Name: "", Address: "", Phone: "" };
   

    GetDetails() {

        const url = "../../../api/company/GetCompanyById?CompanyId=" + this.companyId;


        this.http.get(url).subscribe(
            (res: Response) => {
                this.company = res.json();
                console.log(this.company);
            })

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.companyId = +params['id'];
        });

        this.GetDetails();
    }

    Save() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
          
        };
        const url = "../../../api/company/EditCompany";
        this.http.post(url, this.company)
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

export class Company {
    Id: string;
    Name: string;
    Address: string;
    Phone: string;
}


