import { Component, ViewChild } from '@angular/core';
import {MarkerComponent} from "./marker/marker.component";
import {MapService} from "../../services/map.service";
import {GeocodingService} from "../../services/geocoding.service";
import {Location} from "../../core/location.class";
import * as Leaflet from "leaflet";

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [MapService, GeocodingService]
})

export class MapPage {
        
  @ViewChild(MarkerComponent) markerComponent: MarkerComponent;
    
  private map: any;
  private st: string;    
    
  constructor(public navCtrl: NavController, private mapService:MapService, private geocoder: GeocodingService) {
        this.st = "Hello jordi";               
  }

  ngOnInit() {
        
        console.log("ngOnInit=>" + Leaflet + "--");
        
        this.map = L.map("map", {
            minZoom: 1,
            maxZoom: 4,
            center: [0, 0],
            zoom: 1,
            crs: L.CRS.Simple
        });
        
        // dimensions of the image
        var w = 3373, 
            h = 2959,
            url = './assets/images/mapa.jpg';
        var southWest = this.map.unproject([0, h], this.map.getMaxZoom() - 1);
        var northEast = this.map.unproject([w, 0], this.map.getMaxZoom() - 1);
        var bounds = L.latLngBounds(southWest, northEast);

        // add the image overlay, so that it covers the entire this.map
        L.imageOverlay(url, bounds).addTo(this.map);

        // tell leaflet that the this.map is exactly as big as the image and bind click event
        this.map.setMaxBounds(bounds);
        
        this.mapService.map = this.map;
        
  }        
  ionViewDidLoad () {
        console.log("ionViewDidLoad=>" + this.markerComponent);
        
  }
  ngAfterViewInit(){
        console.log("ngAfterViewInit=>" + this.markerComponent);
        this.markerComponent.Initialize();
        
    }
  mapClick(e) {
        console.log("mapClick " + e + "-" + e.latlng);
    }
  addMarker () {
    console.log("TO-DO añadir marker");
    
  }
}
