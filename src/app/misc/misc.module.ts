import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppRoutingModule } from "../app-routing.module";
import { AlertsComponent } from "./alerts/alerts.component";
import { GmapComponent } from "./gmap/gmap.component";

@NgModule({
  declarations: [NavbarComponent, AlertsComponent, GmapComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavbarComponent, AlertsComponent],
})
export class MiscModule {}
