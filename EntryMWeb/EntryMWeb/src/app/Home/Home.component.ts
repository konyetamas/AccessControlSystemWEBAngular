import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './Home.html',
    styleUrls: ['./HomeStyle.css']
})
export class HomeComponent  implements OnInit {

    constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }
    id: number;
    private sub: any;

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.router.navigate(['nav', this.id]);
        });
    }
}