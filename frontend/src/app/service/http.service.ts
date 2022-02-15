import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private APIRegisterUser: string = '/api/signup';

    constructor(private http: HttpClient, private router: Router) { }


    /*--------creating user-------*/
    createUser(registerObj: any) {
        this.http.post(this.APIRegisterUser, registerObj).subscribe(res => {
            if (res) {
                this.router.navigate(['/']);
            }
        }, (error) => {
            this.router.navigate(['/register']);
        })

    }

    getUser() {
        console.log('---service get user---');
        return this.http.get('/api/users');
    }





}