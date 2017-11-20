/**
 * Created by hildebrandosegundo on 06/06/17.
 */
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedComponentsModule } from '../app/app-shared-components.module';
import { AppHttpService } from '../app/app-http.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {provasComponent} from "./provas.component";
import {provasViewComponent} from "./provas-view.component";
import {provasNewComponent} from "./provas-new.component";
import {provasEditComponent} from "./provas-edit.component";
import { MaterializeModule } from 'ng2-materialize';
import {provaGeradaComponent} from "./provagerada.component";
import {QuillModule} from "ngx-quill";
const appRoutes: Routes =[
    {path: 'provas', component: provasComponent},
    {path: 'provas/new', component: provasNewComponent},
    {path: 'provas/:id', component: provasViewComponent},
    {path: 'provas/:id/edit', component: provasEditComponent},
    {path: 'provagerada/:id', component: provaGeradaComponent},
];
@NgModule({
     imports: [
         AppSharedComponentsModule,
         BrowserModule,
         MaterializeModule.forRoot(),
         RouterModule.forRoot(appRoutes),
         FormsModule,
         ReactiveFormsModule,
         QuillModule
     ],
     declarations: [
         provasComponent,
         provasNewComponent,
         provasViewComponent,
         provasEditComponent,
         provaGeradaComponent
     ],
     providers: [
         AppHttpService
     ]
 })

 export class ProvasModule {}
