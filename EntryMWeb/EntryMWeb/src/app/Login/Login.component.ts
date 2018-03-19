import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './Login.html',
    styleUrls: ['./LoginStyle.css']
})
export class LoginComponent {

    constructor(private router: Router, private http: Http) { }
    user: object = {Name:"", Password:""};


    Login() {
        const url ="../../../api/user/CheckUserAutenthication";
        this.http.get(url)
            .toPromise()
            .then(() => {
                this.router.navigate(['/']);
            })
            .catch(() => { alert("Wrong username or password") })
    }
}