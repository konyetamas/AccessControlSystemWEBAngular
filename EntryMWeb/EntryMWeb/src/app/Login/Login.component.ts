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
    user: object = {Name:"", Password:""};


    Login(name: string, password: string) {
       
        //let headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        //headers.append('UserName', name);
        //headers.append('Password', password);

        //  let params = new HttpParams().set("UserName", name).set("Password", password);
        const url = "../../../api/user/CheckUserAutenthication?UserName=" + name + "&Password=" + password;
        this.http.get(url)
            .toPromise()
            .then(response => {
                if (response != null) {
                   
                    this.router.navigate(['home']);
                }
                else {
                    alert("Wrong username or password") 
                }

            })
            .catch(() => { alert("Wrong username or password") })
    }
}