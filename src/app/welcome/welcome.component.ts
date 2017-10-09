import { Component } from '@angular/core';

@Component({
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})
export class WelcomeComponent {
    public pageTitle: string = "Welcome";

    constructor() {
        
        document.getElementById("login").style.display = "";
    }
}
