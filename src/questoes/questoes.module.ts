/**
 * Created by hildebrandosegundo on 06/06/17.
 */
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedComponentsModule } from '../app/app-shared-components.module';
import { AppHttpService } from '../app/app-http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import {QuestoesComponent} from "./questoes.component";
import {QuestoesViewComponent} from "./questoes-view.component";
import {QuestoesNewComponent} from "./questoes-new.component";
import {QuestoesEditComponent} from "./questoes-edit.component";
import {QuillModule} from "ngx-quill";
const appRoutes: Routes =[
    {path: 'questoes', component: QuestoesComponent},
    {path: 'questoes/new', component: QuestoesNewComponent},
    {path: 'questoes/:id', component: QuestoesViewComponent},
    {path: 'questoes/:id/edit', component: QuestoesEditComponent},
];
@NgModule({
     imports: [
         AppSharedComponentsModule,
         BrowserModule,
         FormsModule,
         ReactiveFormsModule,
         QuillModule,
         CommonModule,
         RouterModule.forRoot(appRoutes)
     ],
     declarations: [
         QuestoesComponent,
         QuestoesNewComponent,
         QuestoesViewComponent,
         QuestoesEditComponent
     ],
     // bootstrap: [],
     providers: [
         AppHttpService
     ],
 })

 export class QuestoesModule {}