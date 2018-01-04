import { Injectable } from "@angular/core";
import { Location } from "../core/location.class";
import { Map } from "leaflet";


@Injectable()

export class MapService {
    public map: Map;
    
    constructor() { 
    }
    ngOnInit() {
    
    }

    disableMouseEvent(elementId: string) {
        let element = <HTMLElement>document.getElementById(elementId);

        /*L.DomEvent.disableClickPropagation(element);
        L.DomEvent.disableScrollPropagation(element);*/
    };
}
