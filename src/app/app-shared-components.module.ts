/**
 * Created by hildebrandosegundo on 08/06/17.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppPaginateComponent } from './app-paginate.component';
import { AppSearchComponent } from './app-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppPaginateComponent,
        AppSearchComponent,
    ],
    exports: [
        AppPaginateComponent,
        AppSearchComponent
    ]
})

export class AppSharedComponentsModule {}