import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { Http, HttpModule} from '@angular/http';

import { HomeModule } from '../home.module';
import { QuestoesModule } from '../questoes/questoes.module';
import { ProvasModule } from '../provas/provas.module';
import { LoginModule } from '../login/login.module';
import { AuthenticationHttpService } from '../login/authentication-http.service';
const appRoutes: Routes =[
    {path: '', redirectTo: '/login', pathMatch: 'full'}
]
@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    QuestoesModule,
    LoginModule,
    ProvasModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [
    { provide: Http,
      useClass: AuthenticationHttpService
    }
  ]
})

export class AppModule { }
