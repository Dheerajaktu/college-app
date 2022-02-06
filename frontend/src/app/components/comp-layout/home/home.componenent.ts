import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.componenent.html',
    styleUrls: ['./home.componenent.css']
})

export class Home {
    toggleFlag: boolean = false;

    constructor() { }


    onClickToggleBtn() {
        if (!this.toggleFlag) {
            $('.sidebar').css('left', '-300px');
            this.toggleFlag = true;
        } else {
            $('.sidebar').css('left', '0px');
            this.toggleFlag = false;
        }

    }

}
