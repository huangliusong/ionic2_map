import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { Usercenter } from '../usercenter/usercenter';
import { ContactPage } from '../contact/contact';
import {BaiduMap} from '../baidu-map/baidu-map';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = Usercenter;
  tab3Root: any = ContactPage;
  tab4Root: any = BaiduMap;
  constructor() {

  }
}
