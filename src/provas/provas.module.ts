/**
 * Created by hildebrandosegundo on 06/06/17.
 */
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedComponentsModule } from '../app/app-shared-components.module';
import { AppHttpService } from '../app/app-http.service';
import { FormsModule } from '@angular/forms';

import {provasComponent} from "./provas.component";
import {provasViewComponent} from "./provas-view.component";
import {provasNewComponent} from "./provas-new.component";
import {provasEditComponent} from "./provas-edit.component";

const appRoutes: Routes =[
    {path: 'provas', component: provasComponent},
    {path: 'provas/new', component: provasNewComponent},
    {path: 'provas/:id', component: provasViewComponent},
    {path: 'provas/:id/edit', component: provasEditComponent},
];
@NgModule({
     imports: [
         AppSharedComponentsModule,
         BrowserModule,
         RouterModule.forRoot(appRoutes),
         FormsModule
     ],
     declarations: [
         provasComponent,
         provasNewComponent,
         provasViewComponent,
         provasEditComponent
     ],
     // bootstrap: [ ProvasAppendComponent ],
     providers: [
         AppHttpService
     ],
 })

 export class ProvasModule {}
