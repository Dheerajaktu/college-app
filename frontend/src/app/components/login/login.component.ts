import { Component } from "@angular/core";
import * as $ from "jquery";


@Component({
    selector: 'app-layout-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class Login {
    constructor() {
        console.log('==con==');

    }

    ngOnInit() {

    }

    onClickNextBtn() {
        console.log('==click==');
        setTimeout(() => {
            console.log('==2 sec==');
            $('#inputEmail').hide()
            $('#inputFieldsParentDiv').append('<input type="password" class="form-control" id="inputEmail" placeholder="Please Enter Password" style="border: 3px solid 474e5d;">')
        }, 2000)
    }



}