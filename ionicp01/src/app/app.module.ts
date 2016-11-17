import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {Register} from '../pages/register/register';
import {Usercenter} from '../pages/usercenter/usercenter';
import {BaiduMap} from '../pages/baidu-map/baidu-map';
import {ComtactDetail} from '../pages/comtact-detail/comtact-detail';
import {HomeDetail} from '../pages/home-detail/home-detail';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Register,
    Usercenter,
    BaiduMap,
    ComtactDetail,
    HomeDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Register,
    Usercenter,
    BaiduMap,
    ComtactDetail,
    HomeDetail
  ],
  providers: []
})
export class AppModule {}
