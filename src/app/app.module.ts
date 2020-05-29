import { SearchBarService } from './services/search-bar.service';
import { ContactUs } from './models/contact-us';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { MiscModule } from './misc/misc.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from "@angular/material/Button";
import { MatIconModule } from "@angular/material/Icon";
import { MatInputModule } from "@angular/material/Input";

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
    FormsModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  //? what are providers again?
  providers: [
    CookieService,
    SearchBarService
  ],
  //not our bootstrap nothing to do witho css
  bootstrap: [AppComponent]
})
export class AppModule { }
