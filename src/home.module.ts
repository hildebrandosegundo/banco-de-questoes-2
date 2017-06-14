/**
 * Created by hildebrandosegundo on 07/06/17.
 */
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
const appRoutes: Routes =[
    {path: 'home', component: HomeComponent},
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        HomeComponent
    ],
    // bootstrap: [],
    // providers: [],
})
export class HomeModule {}