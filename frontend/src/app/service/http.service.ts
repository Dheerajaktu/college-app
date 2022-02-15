import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private APIRegisterUser: string = '/api/signup';

    constructor(private http: HttpClient) {
    }


    /*--------creating user-------*/
    createUser(registerObj: any) {
        console.log('====create user called===', registerObj);
        this.http.post(this.APIRegisterUser, registerObj).subscribe(res => {
            console.log('===post API res===', res);
        }, (error) => {
            console.log('===post API er===', error);
        })

    }

    getUser() {
        console.log('---service get user---');
        return this.http.get('/api/users');
    }





}