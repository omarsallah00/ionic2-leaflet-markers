import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tabs root Page
    
  tab1Root: any = MapPage;
  tab2Root: any = HomePage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
