import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppRoutingModule } from "../app-routing.module";
import { AlertsComponent } from "./alerts/alerts.component";
import { FormsModule } from "@angular/forms";
import { GoogleMapsModule } from "@angular/google-maps";
import { GmapComponent } from './gmap/gmap.component';

@NgModule({
  declarations: [NavbarComponent, AlertsComponent, GmapComponent],
  imports: [CommonModule, AppRoutingModule, FormsModule, GoogleMapsModule],
  exports: [NavbarComponent, AlertsComponent, GmapComponent],
})
export class MiscModule {}
