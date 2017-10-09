import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Login } from './Login';
import { LoginService } from './login.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent {

    login = new Login();

    users: any[];
    valid: boolean = true;
    isLoggedIn: string = "false";

    constructor(private router: Router, private loginService: LoginService) {
        document.getElementById("login").style.display = "none";
        this.loginService.getUsers()
            .subscribe(users => this.users = users);
    }

    onSubmit() {
        this.valid = true;
        var name = this.login.userName;
        sessionStorage.setItem("username", this.login.userName);
        var password = this.login.password;
        var user = this.users.filter(user => user.userName == name && user.password == password)[0];
        if (user) {
            this.isLoggedIn = "true";
            sessionStorage.setItem("isLoggedIn", this.isLoggedIn);
            //  document.getElementById("login").innerHTML = "Logout";
            this.router.navigate(['/products']);
        }
        else {
            this.isLoggedIn = "false";
            sessionStorage.setItem("isLoggedIn", this.isLoggedIn);
            this.valid = false;
        }
    }
}