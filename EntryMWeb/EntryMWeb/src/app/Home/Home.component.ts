import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './Home.html',
    styleUrls: ['./HomeStyle.css']
})
export class HomeComponent {

    constructor(private http: Http, private router: Router) { }
   
}