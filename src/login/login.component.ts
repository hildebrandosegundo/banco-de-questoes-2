/**
 * Created by hildebrandosegundo on 08/06/17.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppHttpService } from '../app/app-http.service';

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
    ngOnInit(){
        $('#loading-spinner').hide();
    }
    public login () {
        $('#loading-spinner').show();
        let auth = {
            grant_type: 'password',
            client_id: '2',
            client_secret: 'blZmXjP1utuXX9wDg4DKbXAN1SPq1JvUnZKTZfHX',
            username: this.user.username,
            password: this.user.password,
            scope: '',
        };

        this.httpService.client('oauth/token').insert(auth).catch((res)=>{
            $('#loading-spinner').hide();
            alert('Erro ao realizar o login, verifique seu cadastro!');
        })
            .then((res)=>{
                if (res) {
                    localStorage['tokens'] = JSON.stringify(res);
                    this.httpService.setAccessToken(res.access_token);
                    this.httpService.builder('user')
                        .getUser()
                        .then((res) => {
                            localStorage['user'] = JSON.stringify(res);
                        });

                    this.router.navigate(['/home']);
                }
            });
    }

}