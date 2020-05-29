import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { AlertsComponent } from './alerts/alerts.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NavbarComponent, AlertsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [NavbarComponent, AlertsComponent]
})
export class MiscModule { }
