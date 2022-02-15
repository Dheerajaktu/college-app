import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class Signup {
    flag = false;
    constructor(private api: HttpService, private router: Router) {
        title: 'Register || Sign up';

        $(function onPageReady() {
            $('#signupButton').prop('disabled', true);
        })
        $(document).on('keyup', '#signupRepeatPassword', () => {
            const p1 = $('#signupPassword').val();
            if (p1 === $('#signupRepeatPassword').val()) {
                $('#signupRepeatPassword').css('border', '1px solid green');
                $('#signupButton').prop('disabled', false);
                this.flag = true;
            } else {
                $('#signupRepeatPassword').css('border', '1px solid red');
                $('#signupButton').prop('disabled', true);
                this.flag = false;
            }
        });
        $(document).on('keyup', '#signupPassword', () => {
            const p1 = $('#signupPassword').val();
            if (p1) {
                if (p1 === $('#signupRepeatPassword').val()) {
                    $('#signupButton').prop('disabled', false);
                    this.flag = true;
                    $('#signupRepeatPassword').css('border', '1px solid #ced4da');
                } else {
                    $('#signupRepeatPassword').css('border', '1px solid red');
                    $('#signupButton').prop('disabled', true);
                    this.flag = false;
                }
            } else {
                $('#signupButton').prop('disabled', true);
                $('#signupRepeatPassword').css('border', '1px solid #ced4da');
                this.flag = false;
            }
        })

    }

    ngOnInit() {
        this.getUserData();
    }

    saveUser(data: any) {
        if (data.signupFirstname && data.signupLastname && data.signupEmail && data.signupMobileNo && data.signupPassword && this.flag) {
            this.api.createUser(data);
        } else {
            this.errorWhileSavingUser();
        }
    }
    errorWhileSavingUser() {
        $('#warningOnSignup').css('display', 'block');
        return false;
    }

    getUserData() {
        this.api.getUser().subscribe((res) => {
            console.log('--hello user--', res);
            if (res) {
                this.router.navigate(['/']);
            } else {
                this.errorWhileSavingUser();
            }

        }, (e) => {
            console.log('---hello error---', e);
            this.errorWhileSavingUser();
        })
    }




}

