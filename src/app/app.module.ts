import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonPartsModule } from './common-parts/common-parts.module';
import { TaskPagesModule } from './task-pages/task-pages.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
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
    AppRoutingModule,
    RouterModule,
    MatSlideToggleModule
  ],
  exports: [
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
