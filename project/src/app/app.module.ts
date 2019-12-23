import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplayoutComponent } from './applayout/applayout.component';
import { NgbModule, NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { appservice } from './service/applayout.service';
import { FilenotfoundComponent } from './filenotfound/filenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplayoutComponent,
    FilenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    HttpClientModule
  ],
  providers: [appservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
