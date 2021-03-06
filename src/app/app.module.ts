import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule,  AppRoutingModule],
    declarations: [AppComponent, WelcomeComponent,  LoginComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
