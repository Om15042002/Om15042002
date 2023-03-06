import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonPartsModule } from './common-parts/common-parts.module';
import { TaskPagesModule } from './task-pages/task-pages.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    CommonPartsModule,
    TaskPagesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
