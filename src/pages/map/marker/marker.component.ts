import { Component } from "@angular/core";
import { MapService } from "../../../services/map.service";
import { Map, MouseEvent, Marker } from "leaflet";
import { NavController } from 'ionic-angular';
import { ContactPage } from '../../contact/contact';

@Component({
    selector: "markers",
    templateUrl: "marker.component.html",
    styles: [
      
    ],
    providers: []
})
export class MarkerComponent {
    editing: boolean;
    removing: boolean;
    markerCount: number;
    
    constructor(private mapService: MapService, private navCtrl : NavController) { 
        this.editing = false;
        this.removing = false;
        this.markerCount = 0;
    }

    ngOnInit() {
        /*this.mapService.disableMouseEvent("add-marker");
        this.mapService.disableMouseEvent("remove-marker");*/
    }

    Initialize() {
        console.log("marker initialize called");
        this.mapService.map.on("click", (e: MouseEvent) => {
            if (!this.editing)
                return;
            
            let marker = L.marker(e.latlng, {
                    icon: L.icon({
                        iconUrl: './assets/icon/marker-green.png', 
                        shadowUrl: "",
                        iconSize:     [60, 60], // size of the icon
                        shadowSize:   [0, 0], // size of the shadow
                        iconAnchor:   [30, 60], // point of the icon which will correspond to marker s location
                        shadowAnchor: [0, 0],  // the same for the shadow
                        popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
                    }),
                    draggable: true
                })
                .bindPopup("Marker #" + (this.markerCount + 1).toString(), {
                    offset: L.point(0, 0)
                })
                .addTo(this.mapService.map)
                .openPopup();
            
                this.markerCount += 1;
            
                //stop editing
                this.toggleEditing();
            
                marker.on("click", (event: MouseEvent) => {
                    if (this.removing) {
                        this.mapService.map.removeLayer(marker);
                        this.markerCount -= 1;
                        this.toggleRemoving();
                    }
                    else {
                        this.xTest();      
                    }
                });
            
            
            })
    }

    toggleEditing() {
        this.editing = !this.editing;
        if (this.editing && this.removing) {
            this.removing = false;
        }
    }
    
    toggleRemoving() {
        this.removing = !this.removing;

        if (this.editing && this.removing) {
            this.editing = false;
        }
    }
    xTest() {
        this.navCtrl.push(ContactPage);
        
    }
}
