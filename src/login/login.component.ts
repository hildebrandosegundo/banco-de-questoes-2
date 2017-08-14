/**
 * Created by hildebrandosegundo on 08/06/17.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppHttpService } from '../app/app-http.service';
// import any = jasmine.any;

interface User {
    username?:string;
    password?:string;
}

@Component({
    templateUrl: './login.component.html',
    styles: [require('./login.component.css').toString()],
})

export class LoginComponent {
    public user: User = {};

    constructor (
        private httpService: AppHttpService,
        private router: Router,
    ) {}

    public login () {
        let auth = {
            grant_type: 'password',
            client_id: '2',
            client_secret: 'blZmXjP1utuXX9wDg4DKbXAN1SPq1JvUnZKTZfHX',
            username: this.user.username,
            password: this.user.password,
            scope: '',
        };

        this.httpService.client('oauth/token').insert(auth)
            .then((res)=>{
                localStorage['tokens'] = JSON.stringify(res);
                this.httpService.setAccessToken(res.access_token);
                this.router.navigate(['/home']);
            });
    }

}