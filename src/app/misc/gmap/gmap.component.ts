import { Component, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

//AIzaSyCyUj8Iop26HzwdeMKyKH6CxEwoZe0VROk
@Component({
  selector: "gmap",
  templateUrl: "./gmap.component.html",
  styleUrls: ["./gmap.component.scss"],
})
export class GmapComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: -34.397, lng: 150.644 }; //some default location in australia
  options: google.maps.MapOptions = {
    mapTypeId: "hybrid",
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ["hybrid", "roadmap", "terrain"],
    },
  };

  constructor() {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }
}
