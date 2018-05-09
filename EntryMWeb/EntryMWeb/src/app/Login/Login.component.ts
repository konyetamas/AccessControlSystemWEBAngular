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

    constructor(private http: Http, private router: Router) { }
    user: object = { Name: "", Password: "" };
    id: number;

    Login(name: string, password: string) {

        const url = "../../../api/user/CheckUserAutenthication?UserName=" + name + "&Password=" + password;
        this.http.get(url)
            .toPromise()
            .then((response: Response) => {
                if (response != null && response.json()!=0 ) {
                    this.id = response.json();
                    this.router.navigate(['nav', this.id]);
                }
                else {
                    alert("Wrong username or password");
                }

            })
            .catch(() => { alert("Wrong username or password") })
    }
}