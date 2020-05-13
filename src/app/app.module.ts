import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { MiscModule } from './misc/misc.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MiscModule,
    PagesModule,
    FormsModule
  ],
  //? what are providers again?
  providers: [
    CookieService
  ],
  //not our bootstrap nothing to do witho css
  bootstrap: [AppComponent]
})
export class AppModule { }
